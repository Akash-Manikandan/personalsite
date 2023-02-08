<script lang="ts">
	import { isOpen } from '../stores/stores';
	let assignmentSite: string = '/works/AssignmentSite.png';
</script>

<svelte:head>
	<title>Akash | Works</title>
</svelte:head>

<main class="absolute main-container" style={$isOpen ? 'top: 55%' : 'top: 25%'}>
	<div class="flex align-center  gap-8 md:gap-4 m-2 md:m-3 lg:m-4 xl:m-5 flex-col md:flex-row ">
		<a target="_blank" class="w-4/6" rel="noreferrer" href="https://assignment1-akash.vercel.app/">
			<img src={assignmentSite} alt="AssignmentSite" class="rounded-sm md:rounded-md lg:rounded-lg xl:rounded-xl" />
		</a>
		<div class="flex items-center justify-center dark:text-[#b8c1ec]">
			<p>Assignment Site</p>
		</div>
	</div>
</main>

<style lang="scss">
	.main-container {
		transition: top 0.5s linear;
		text-align: left;
	}
</style>
