<script>
    import Selector from "./components/Selector.svelte";
    import QuestionModal from "./components/QuestionModal.svelte";

    const handleMessage = (event) => {
        selection = event.detail.id;
        config = Object.assign({}, event.detail.config);
    };

    let selection;
    let config = {};
</script>

{#if selection}
    <QuestionModal {selection} {config} />
{:else}
    <Selector on:message={handleMessage} />
{/if}
