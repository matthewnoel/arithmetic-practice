<script>
    export let selection;
    export let config;

    const getRandomInt = (inclusiveMin, inclusiveMax) => {
        inclusiveMin = Math.ceil(inclusiveMin);
        inclusiveMax = Math.floor(inclusiveMax);
        return Math.floor(
            Math.random() * (inclusiveMax - inclusiveMin + 1) + inclusiveMin
        );
    };

    const getProblem = () => {
        switch (selection) {
            case 1:
                return generateAdditionProblem(
                    config.firstTermMinimumDigits,
                    config.firstTermMaximumDigits,
                    config.secondTermMinimumDigits,
                    config.secondTermMaximumDigits
                );
            case 2:
                return generateSubtractionProblem(
                    config.firstTermMinimumDigits,
                    config.firstTermMaximumDigits,
                    config.secondTermMinimumDigits,
                    config.secondTermMaximumDigits
                );
            case 3:
                return generateMultiplicationProblem(
                    config.firstTermMinimumDigits,
                    config.firstTermMaximumDigits,
                    config.secondTermMinimumDigits,
                    config.secondTermMaximumDigits
                );
            case 4:
                return generateDivisionProblem();
            default:
                break;
        }
        console.log("unknown selection");
        alert("unkown selection");
    };

    const generateTerm = (minimumDigits, maximumDigits) => {
        const digitCount = getRandomInt(minimumDigits, maximumDigits);
        return getRandomInt(
            Math.pow(10, digitCount - 1),
            Math.pow(10, digitCount) - 1
        );
    };

    const generateAdditionProblem = (
        firstTermMinimumDigits,
        firstTermMaximumDigits,
        secondTermMinimumDigits,
        secondTermMaximumDigits
    ) => {
        const term1 = generateTerm(
            firstTermMinimumDigits,
            firstTermMaximumDigits
        );
        const term2 = generateTerm(
            secondTermMinimumDigits,
            secondTermMaximumDigits
        );
        validator = (guess) => guess === term1 + term2;
        problem = `${term1} + ${term2} =`;
    };

    const generateSubtractionProblem = (
        firstTermMinimumDigits,
        firstTermMaximumDigits,
        secondTermMinimumDigits,
        secondTermMaximumDigits
    ) => {
        const term1 = generateTerm(
            firstTermMinimumDigits,
            firstTermMaximumDigits
        );
        const term2 = generateTerm(
            secondTermMinimumDigits,
            secondTermMaximumDigits
        );
        validator = (guess) => guess === term1 - term2;
        problem = `${term1} - ${term2} =`;
    };

    const generateMultiplicationProblem = (
        firstTermMinimumDigits,
        firstTermMaximumDigits,
        secondTermMinimumDigits,
        secondTermMaximumDigits
    ) => {
        const term1 = generateTerm(
            firstTermMinimumDigits,
            firstTermMaximumDigits
        );
        const term2 = generateTerm(
            secondTermMinimumDigits,
            secondTermMaximumDigits
        );
        validator = (guess) => guess === term1 * term2;
        problem = `${term1} × ${term2} =`;
    };

    const generateDivisionProblem = () => {
        const term1 = getRandomInt(1, 9);
        const term2 = getRandomInt(1, 9);
        const term3 = term1 * term2;
        validator = (guess) => guess === term1;
        problem = `${term3} ÷ ${term2} =`;
    };

    const handleCorrectAnswer = () => {
        getProblem();
        feedback = null;
        value = null;
    };

    const handleIncorrectAnswer = () => {
        feedback = `${value} isn't correct. Try again 😊`;
        value = null;
    };

    const handleFormSubmission = () =>
        validator(value) ? handleCorrectAnswer() : handleIncorrectAnswer();

    let problem;
    let validator = () => false;
    let feedback;
    let value;

    $: if (!problem) getProblem();
</script>

<form on:submit|preventDefault={handleFormSubmission}>
    <label for="answer">{problem}</label>
    <input type="number" name="answer" id="answer" bind:value />
    <input type="submit" value="Submit" disabled={value == null} />
    {#if feedback}
        <p>{feedback}</p>
    {/if}
</form>
