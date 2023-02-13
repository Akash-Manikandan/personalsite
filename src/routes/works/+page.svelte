<script lang="ts">
	import type { PageData } from '../$types';
	import WorksCard from '../components/WorksCard.svelte';
	import { isOpen } from '../stores/stores';
	export let data: PageData;
</script>

<svelte:head>
	<title>Akash | Works</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Kalam:wght@300;400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="absolute main-container flex flex-col gap-5" style={$isOpen ? 'top: 55%' : 'top: 35%'}>
	{#each data.info as item}
		<WorksCard data={item} />
	{/each}
</main>

<style lang="scss">
	.main-container {
		transition: top 0.5s linear;
		text-align: left;
	}
</style>
