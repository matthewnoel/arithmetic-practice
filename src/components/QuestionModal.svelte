<script>
    import { tick } from "svelte";
    import { Confetti } from "svelte-confetti";

    export let selection;
    export let config;

    const MAX_PROBLEM_RETRY_COUNT = 10;

    const getRandomInt = (inclusiveMin, inclusiveMax) => {
        inclusiveMin = Math.ceil(inclusiveMin);
        inclusiveMax = Math.floor(inclusiveMax);
        return Math.floor(
            Math.random() * (inclusiveMax - inclusiveMin + 1) + inclusiveMin
        );
    };

    const getProblem = () => {
        let newValidator = validator;
        let newProblem = problem;
        let i = 0;

        while (problem === newProblem && i < MAX_PROBLEM_RETRY_COUNT) {
            i++;
            switch (selection) {
                case 1:
                    [newValidator, newProblem] = getAdditionProblem(
                        config.firstTermMinimumDigits,
                        config.firstTermMaximumDigits,
                        config.secondTermMinimumDigits,
                        config.secondTermMaximumDigits,
                    );
                    break;
                case 2:
                    [newValidator, newProblem] = getSubtractionProblem(
                        config.firstTermMinimumDigits,
                        config.firstTermMaximumDigits,
                        config.secondTermMinimumDigits,
                        config.secondTermMaximumDigits,
                        config.allowNegativeAnswers,
                    );
                    break;
                case 3:
                    [newValidator, newProblem] = getMultiplicationProblem(
                        config.firstTermMinimumDigits,
                        config.firstTermMaximumDigits,
                        config.secondTermMinimumDigits,
                        config.secondTermMaximumDigits,
                    );
                    break;
                case 4:
                    [newValidator, newProblem] = getDivisionProblem();
                    break;
                default:
                    console.log("unknown selection");
                    break;
            }
        }

        validator = newValidator;
        problem = newProblem;
    };

    const getTerm = (minimumDigits, maximumDigits) => {
        const digitCount = getRandomInt(minimumDigits, maximumDigits);
        return getRandomInt(
            Math.pow(10, digitCount - 1),
            Math.pow(10, digitCount) - 1,
        );
    };

    const getAdditionProblem = (
        firstTermMinimumDigits,
        firstTermMaximumDigits,
        secondTermMinimumDigits,
        secondTermMaximumDigits,
    ) => {
        const term1 = getTerm(firstTermMinimumDigits, firstTermMaximumDigits);
        const term2 = getTerm(secondTermMinimumDigits, secondTermMaximumDigits);
        return [(guess) => guess === term1 + term2, `${term1} + ${term2} =`];
    };

    const getSubtractionProblem = (
        firstTermMinimumDigits,
        firstTermMaximumDigits,
        secondTermMinimumDigits,
        secondTermMaximumDigits,
        allowNegativeAnswers,
    ) => {
        let term1 = getTerm(firstTermMinimumDigits, firstTermMaximumDigits);
        let term2 = getTerm(secondTermMinimumDigits, secondTermMaximumDigits);
        if (!allowNegativeAnswers) {
            [term1, term2] = [Math.max(term1, term2), Math.min(term1, term2)];
        }
        return [(guess) => guess === term1 - term2, `${term1} - ${term2} =`];
    };

    const getMultiplicationProblem = (
        firstTermMinimumDigits,
        firstTermMaximumDigits,
        secondTermMinimumDigits,
        secondTermMaximumDigits,
    ) => {
        const term1 = getTerm(firstTermMinimumDigits, firstTermMaximumDigits);
        const term2 = getTerm(secondTermMinimumDigits, secondTermMaximumDigits);
        return [(guess) => guess === term1 * term2, `${term1} × ${term2} =`];
    };

    const getDivisionProblem = () => {
        const term1 = getRandomInt(1, 9);
        const term2 = getRandomInt(1, 9);
        const term3 = term1 * term2;
        return [(guess) => guess === term1, `${term3} ÷ ${term2} =`];
    };

    const handleCorrectAnswer = () => {
        getProblem();
        feedback = null;
        value = null;
        streak++;
        doConfetti();
    };

    const handleIncorrectAnswer = () => {
        feedback = `${value} isn't correct. Try again 😊`;
        value = null;
        streak = 0;
    };

    const handleFormSubmission = () =>
        validator(value) ? handleCorrectAnswer() : handleIncorrectAnswer();

    const doConfetti = async () => {
        showConfetti = false;
        await tick();
        showConfetti = true;
    };

    let problem;
    let validator = () => false;
    let feedback;
    let value;
    let showConfetti = false;
    let streak = 0;

    $: if (!problem) getProblem();
</script>

<form on:submit|preventDefault={handleFormSubmission}>
    <label for="answer">{problem}</label>
    <input type="number" name="answer" id="answer" bind:value />
    <br />
    <input type="submit" value="Submit" disabled={value == null} />
    {#if showConfetti}
        <div class="confetti">
            <Confetti />
        </div>
    {/if}
    {#if feedback}
        <p>{feedback}</p>
    {/if}
    {#if streak}
        <div id="streak">
            <span>🔥{streak}</span>
        </div>
    {/if}
</form>

<style>
    form {
        text-align: center;
    }

    input[type="number"] {
        width: 4em;
    }

    #streak {
        position: fixed;
        top: 3em;
        right: 3em;
    }

    .confetti {
        pointer-events: none;
        position: absolute;
        top: 50%;
        left: 50%;
    }
</style>
