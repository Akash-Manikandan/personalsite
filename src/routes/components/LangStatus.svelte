<script lang="ts">
	import { inview } from 'svelte-inview';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	type LangStatus = {
		id: number;
		name: string;
		percent: number;
	};
	export let data: LangStatus;
	const progress = tweened(0, {
		duration: 1000,
		delay: 1000,
		easing: cubicOut
	});
	const onSet = () => {
		progress.set(data.percent);
	};
</script>

<div
	use:inview
	on:enter|once={onSet}
	class="flex flex-row items-center justify-center gap-7 w-full md:w-10/12 lg:w-3/4 xl:w-3/6"
>
	<p id={`${data.id}`} class="w-40 md:indent-7 text-left">{data.name}</p>
	<div class="flex gap-4 items-center w-full">
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div
				style="width:{$progress}%;"
				class="dark:bg-[#b8c1ec] bg-[#994ff3] h-full rounded-full hover:dark:bg-[#e78fb3]"
			/>
		</div>
		<!-- <progress value={$progress}/> -->
		<span>{data.percent}%</span>
	</div>
</div>
