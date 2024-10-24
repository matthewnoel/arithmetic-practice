<script>
    import { run, preventDefault } from 'svelte/legacy';

    import { tick } from "svelte";
    import { Confetti } from "svelte-confetti";

    let { selection, config } = $props();

    const MAX_PROBLEM_RETRY_COUNT = 10;

    const getRandomInt = (inclusiveMin, inclusiveMax) => {
        inclusiveMin = Math.ceil(inclusiveMin);
        inclusiveMax = Math.floor(inclusiveMax);
        return Math.floor(
            Math.random() * (inclusiveMax - inclusiveMin + 1) + inclusiveMin,
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
                    [newValidator, newProblem] = getDivisionProblem(
                        config.firstTermMinimumDigits,
                        config.firstTermMaximumDigits,
                        config.secondTermMinimumDigits,
                        config.secondTermMaximumDigits,
                    );
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

    const getDivisionProblem = (
        firstTermMinimumDigits,
        firstTermMaximumDigits,
        secondTermMinimumDigits,
        secondTermMaximumDigits,
    ) => {
        let term1 = getTerm(
            firstTermMinimumDigits,
            firstTermMaximumDigits,
        );
        const potentialSecondTerms = [];

        for (
            let i = Math.pow(10, secondTermMinimumDigits - 1);
            i < Math.pow(10, secondTermMaximumDigits) - 1;
            i++
        ) {
            if (term1 % i === 0) potentialSecondTerms.push(i);
        }

        let term2;
        if (potentialSecondTerms.length > 0) {
            term2 = potentialSecondTerms[Math.floor(Math.random() * potentialSecondTerms.length)];
        } else {
            // No divisors exist for this dividend such that the quotient is an integer.
            // Intead return a problem where the divisor's digit requirement is satisfied
            // and the quotient adopts the digit requirements from the first term.
            term2 = getTerm(secondTermMinimumDigits, secondTermMaximumDigits);
            term1 = term2 * getTerm(firstTermMinimumDigits, firstTermMaximumDigits);
        }
        return [(guess) => guess === term1 / term2, `${term1} ÷ ${term2} =`];
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

    let problem = $state();
    let validator = () => false;
    let feedback = $state();
    let value = $state();
    let showConfetti = $state(false);
    let streak = $state(0);

    run(() => {
        if (!problem) getProblem();
    });
</script>

<form onsubmit={preventDefault(handleFormSubmission)}>
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
