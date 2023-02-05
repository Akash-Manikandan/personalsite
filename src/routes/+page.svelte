<script lang="ts">
	import type { PageData } from './$types';
	import Card from './components/Card.svelte';
	import LangStatus from './components/LangStatus.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Akash | Home</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Alex+Brush&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<section class="signature">
	<div class="name text-[#994ff3] dark:text-[#ef4565] font-semibold">Akash M</div>
	<div class="description dark:text-[#b8c1ec]">OPTIMISTIC | RESULT-DRIVEN | PROBLEM-SOLVING</div>
</section>
<main class="main-container-1">
	<section class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 md:p-3 lg:p-4 xl:p-5">
		{#each data.post as items}
			<Card id={items.id} title={items.title} content={items.content} />
		{/each}
	</section>
	<section class="p-2 md:p-3 lg:p-4 xl:p-5 flex flex-col gap-5 justify-center items-center pt-9 pb-9 ">
		{#each data.status as item}
			<LangStatus data={item} />
		{/each}
	</section>
</main>

<style lang="scss">
	.main-container-1 {
		position: absolute;
		top: 100%;
		width: 100%;
	}
	.description {
		font-family: 'Itim';
		font-size: larger;
	}
	.signature {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 40%;
		text-align: center;
		position: absolute;
		left: 6%;
		top: 65%;
		.name {
			font-family: 'Alex Brush', cursive;
			font-size: 50px;
		}
	}
	@media screen and (max-width: 560px) {
		.signature {
			width: 60%;
			top: 55%;
		}
	}
</style>
