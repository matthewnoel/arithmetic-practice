<script>
    const getRandomInt = (inclusiveMin, inclusiveMax) => {
        inclusiveMin = Math.ceil(inclusiveMin);
        inclusiveMax = Math.floor(inclusiveMax);
        return Math.floor(
            Math.random() * (inclusiveMax - inclusiveMin + 1) + inclusiveMin
        );
    };

    const generateSingleDigitAdditionProblem = () => {
        const term1 = getRandomInt(1, 9);
        const term2 = getRandomInt(1, 9);
        answer = term1 + term2;
        problem = `${term1} + ${term2} =`;
    };

    const handleCorrectAnswer = () => {
        generateSingleDigitAdditionProblem();
        feedback = null;
        value = null;
    };

    const handleIncorrectAnswer = () => {
        feedback = `${value} isn't correct. Try again 😊`;
        value = null;
    };

    const handleFormSubmission = () =>
        value === answer ? handleCorrectAnswer() : handleIncorrectAnswer();

    let problem;
    let answer;
    let feedback;
    let value;

    $: if (!problem) generateSingleDigitAdditionProblem();
</script>

<form on:submit|preventDefault={handleFormSubmission}>
    <label for="answer">{problem}</label>
    <input type="number" name="answer" id="answer" bind:value />
    <input type="submit" value="Submit" />
    {#if feedback}
        <p>{feedback}</p>
    {/if}
</form>
