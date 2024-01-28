<script>
    import Selector from "./components/Selector.svelte";
    import QuestionModal from "./components/QuestionModal.svelte";
    import ThemeToggle from "./components/ThemeToggle.svelte";

    const handleMessage = (event) => {
        selection = event.detail.id;
        config = Object.assign({}, event.detail.config);
    };

    let selection;
    let config = {};
</script>

<div></div>
{#if selection}
    <QuestionModal {selection} {config} />
    <div></div>
{:else}
    <Selector on:message={handleMessage} />
    <footer>
        <span
            >This website is open source. The source code is <a
                href="https://github.com/matthewnoel/arithmetic-practice"
                target="_blank">available here</a
            >. The list of third pary licenses is
            <a
                href="https://raw.githubusercontent.com/matthewnoel/arithmetic-practice/main/third-party-licenses.txt"
                target="_blank">available here</a
            >. You can file an
            <a
                href="https://github.com/matthewnoel/arithmetic-practice/issues/new"
                target="_blank">issue here</a
            >.</span
        >
        <span>
            Change Theme:
        <ThemeToggle />
    </span>
    </footer>
{/if}
