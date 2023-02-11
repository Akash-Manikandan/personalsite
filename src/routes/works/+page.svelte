<script lang="ts">
	import WorksCard from '../components/WorksCard.svelte';
	import { isOpen } from '../stores/stores';
</script>

<svelte:head>
	<title>Akash | Works</title>
</svelte:head>

<main class="absolute main-container flex flex-col gap-5" style={$isOpen ? 'top: 55%' : 'top: 35%'}>
	<WorksCard />
	<WorksCard />
	<WorksCard />
	<WorksCard />
</main>

<style lang="scss">
	.main-container {
		transition: top 0.5s linear;
		text-align: left;
	}
</style>
