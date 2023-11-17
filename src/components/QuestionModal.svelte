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
                return generateAdditionProblem(config.firstTermMinimumDigits, config.firstTermMaximumDigits, config.secondTermMinimumDigits, config.secondTermMaximumDigits);
            case 2:
                return generateSingleDigitSubtractionProblem();
            case 3:
                return generateSingleDigitMultiplicationProblem();
            case 4:
                return generateDivisionProblem();
            default:
                break;
        }
        console.log("unknown selection");
        alert("unkown selection");
    };

    const generateAdditionProblem = (firstTermMinimumDigits, firstTermMaximumDigits, secondTermMinimumDigits, secondTermMaximumDigits) => {
        const firstTermDigitCount = getRandomInt(firstTermMinimumDigits, firstTermMaximumDigits);
        const secondTermDigitCount = getRandomInt(secondTermMinimumDigits, secondTermMaximumDigits);
        const term1 = getRandomInt(Math.pow(10, firstTermDigitCount - 1), Math.pow(10, firstTermDigitCount) - 1);
        const term2 = getRandomInt(Math.pow(10, secondTermDigitCount - 1), Math.pow(10, secondTermDigitCount) - 1);
        validator = (guess) => guess === term1 + term2;
        problem = `${term1} + ${term2} =`;
    };

    const generateSingleDigitSubtractionProblem = () => {
        const term1 = getRandomInt(1, 9);
        const term2 = getRandomInt(1, 9);
        validator = (guess) => guess === term1 - term2;
        problem = `${term1} - ${term2} =`;
    };

    const generateSingleDigitMultiplicationProblem = () => {
        const term1 = getRandomInt(1, 9);
        const term2 = getRandomInt(1, 9);
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
