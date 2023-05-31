<script lang="ts">
	import type { PageData } from './$types';
	import WorksCard from '../components/WorksCard.svelte';
	import { isOpen } from '../stores/stores';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	export let data: PageData;
	let width: number;
	const progress = tweened(15, {
		duration: 1000,
		easing: cubicOut
	});
	$: if (!$isOpen) {
		progress.set(15);
	} else {
		progress.set(25);
	}
	let visible = true;
	$: if ($progress == 15) {
		visible = true;
	} else {
		visible = false;
	}
</script>

<svelte:window bind:innerWidth={width} />

<svelte:head>
	<title>Akash | Works</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Maven+Pro&family=Montserrat:wght@400;500&family=Kalam:wght@300;400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
{#if !$isOpen && visible}
	<h1 class="text-left ml-8 mt-8 font-bold text-3xl" style="font-family: 'Maven Pro', sans-serif;">
		Works
	</h1>
{/if}
<main class="absolute main-container flex flex-col gap-5" style={$isOpen ? 'top: 60%' : 'top: 35%'}>
	{#each data.info as item}
		<WorksCard data={item} {width} />
	{/each}
</main>

<style lang="scss">
	.main-container {
		transition: top 0.5s linear;
		text-align: left;
	}
</style>
