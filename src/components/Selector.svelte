<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
	const handleFormSubmission = () => {
		dispatch("message", {
			id: selected.id,
		});
	};

	let options = [
		{ id: 1, text: "Addition" },
		{ id: 2, text: "Subtraction" },
	];
	let selected;
</script>

<form on:submit|preventDefault={handleFormSubmission}>
	<select bind:value={selected}>
		{#each options as option}
			<option value={option}>
				{option.text}
			</option>
		{/each}
	</select>
	<button disabled={!selected} type="submit">Practice</button>
</form>
