<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
	const handleFormSubmission = () => {
		const id = selected.id;
		const config = {
			firstTermMinimumDigits: first_min_value,
			firstTermMaximumDigits: first_max_value,
			secondTermMinimumDigits: second_min_value,
			secondTermMaximumDigits: second_max_value,
		};
		dispatch("message", {
			id,
			config,
		});
	};

	let options = [
		{ id: 1, text: "Addition" },
		{ id: 2, text: "Subtraction" },
		{ id: 3, text: "Multiplication" },
		{ id: 4, text: "Division" },
	];
	let selected;
	let first_min_value = 1;
	let first_min_min = 1;
	let first_min_max = 6;
	let first_max_value = 1;
	let first_max_min = 1;
	let first_max_max = 6;
	let second_min_value = 1;
	let second_min_min = 1;
	let second_min_max = 6;
	let second_max_value = 1;
	let second_max_min = 1;
	let second_max_max = 6;

	const handleFirstMinChange = (event) => {
		const new_value = event.target.valueAsNumber;
		if (new_value > first_max_min && new_value > first_max_value) {
			first_max_value = new_value;
		}
		first_max_min = new_value;
	};
	const handleFirstMaxChange = (event) => {
		const new_value = event.target.valueAsNumber;
		if (new_value < first_min_max && new_value < first_min_value) {
			first_min_value = new_value;
		}
		first_min_max = new_value;
	};
	const handleSecondMinChange = (event) => {
		const new_value = event.target.valueAsNumber;
		if (new_value > second_max_min && new_value > second_max_value) {
			second_max_value = new_value;
		}
		second_max_min = new_value;
	};
	const handleSecondMaxChange = (event) => {
		const new_value = event.target.valueAsNumber;
		if (new_value < second_min_max && new_value < second_min_value) {
			second_min_value = new_value;
		}
		second_min_max = new_value;
	};
</script>

<form on:submit|preventDefault={handleFormSubmission}>
	<label for="type">Problem Type</label>
	<select name="type" id="type" bind:value={selected}>
		{#each options as option}
			<option value={option}>
				{option.text}
			</option>
		{/each}
	</select>
	{#if selected?.id === 1 || selected?.id === 2 || selected?.id === 3}
		<label for="first-min"
			>Minimum Digits In First Term ({first_min_value})</label
		>
		<input
			type="range"
			name="first-min"
			id="first-min"
			min={first_min_min}
			max={first_min_max}
			step="1"
			bind:value={first_min_value}
			on:change={handleFirstMinChange}
			disabled={first_min_min === first_min_max}
		/>
		<label for="first-max"
			>Maximum Digits In First Term ({first_max_value})</label
		>
		<input
			type="range"
			name="first-max"
			id="first-max"
			min={first_max_min}
			max={first_max_max}
			step="1"
			bind:value={first_max_value}
			on:change={handleFirstMaxChange}
			disabled={first_max_min === first_max_max}
		/>
		<label for="second-min"
			>Minimum Digits In Second Term ({second_min_value})</label
		>
		<input
			type="range"
			name="second-min"
			id="second-min"
			min={second_min_min}
			max={second_min_max}
			step="1"
			bind:value={second_min_value}
			on:change={handleSecondMinChange}
			disabled={second_min_min === second_min_max}
		/>
		<label for="second-max"
			>Maximum Digits In Second Term ({second_max_value})</label
		>
		<input
			type="range"
			name="second-max"
			id="second-max"
			min={second_max_min}
			max={second_max_max}
			step="1"
			bind:value={second_max_value}
			on:change={handleSecondMaxChange}
			disabled={second_max_min === second_max_max}
		/>
	{/if}
	<button disabled={!selected} type="submit">Practice</button>
</form>
