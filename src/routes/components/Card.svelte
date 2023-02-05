<script lang="ts">
	export let id: number;
	export let title: string;
	export let content: string[];
</script>

<div
	class="card-container-main border-[#ff8e3c] border-2 dark:border-0 shadow-xl dark:shadow-2xl transition-all p-2 md:p-3 lg:p-4 xl:p-4 bg-[#fffffe99] dark:bg-[#121629AA]  dark:text-[#b8c1ec] flex justify-center items-start flex-col gap-4 rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl"
	id={`${id}`}
>
	<h1
		class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold self-start"
		style="font-family: 'Itim';"
	>
		{title}
	</h1>
	<div class="text-start text-md md:text-lg lg:text-xl xl:text-2xl" style="font-family: Kalam;">
		{#if content.length === 1}
			<p class="text-justify">{content}</p>
		{:else}
			<ul class="flex flex-col m-7">
				{#each content as items}
					<li class="list-disc">{items}</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style lang="scss">
	@media (min-width: 640px) {
		.card-container-main[id='1'] {
			grid-column: 1 / -1;
		}
		.card-container-main[id='2'] {
			grid-column: 1 / -1;
		}
		.card-container-main[id='3'] {
			grid-column: 1 / -1;
		}
		.card-container-main[id='4'] {
			grid-column: 1 / -1;
		}
	}
	@media (min-width: 768px) {
		.card-container-main[id='1'] {
			grid-column: 1 / -1;
		}
		.card-container-main[id='2'] {
			grid-column: span 1 / span 1;
		}
		.card-container-main[id='3'] {
			grid-column: span 1 / span 1;
		}
		.card-container-main[id='4'] {
			grid-column: 1 / -1;
		}
	}
	@media (min-width: 1024px) {
		.card-container-main[id='1'] {
			grid-column: 1 / -1;
		}
		.card-container-main[id='2'] {
			grid-column: span 1 / span 1;
		}
		.card-container-main[id='3'] {
			grid-column: span 2 / span 2;
		}
		.card-container-main[id='4'] {
			grid-column: 1 / -1;
		}
	}
	@media (min-width: 1280px) {
		.card-container-main[id='1'] {
			grid-column: 1 / -1;
		}
		.card-container-main[id='2'] {
			grid-column: span 1 / span 1;
		}
		.card-container-main[id='3'] {
			grid-column: span 2 / span 2;
		}
		.card-container-main[id='4'] {
			grid-column: 1 / -1;
		}
	}
</style>
