<script lang="ts">
	import { isOpen } from '../stores/stores';
</script>

<svelte:head>
	<title>Akash | Contact</title>
</svelte:head>

<main class="grid grid-cols-2 justify-items-center absolute main-container w-full" style={$isOpen ? 'top: 55%' : 'top: 35%'}>
	<div>Github</div>
	<div>Twitter</div>
</main>

<style lang="scss">
	.main-container {
		transition: top 0.5s linear;
		text-align: left;
	}
</style>
