<script>
    import Selector from "./components/Selector.svelte";
    import QuestionModal from "./components/QuestionModal.svelte";

    const handleMessage = (event) => {
        selection = event.detail.id;
    };

    let selection;
</script>

{#if selection}
    <QuestionModal {selection} />
{:else}
    <Selector on:message={handleMessage} />
{/if}
