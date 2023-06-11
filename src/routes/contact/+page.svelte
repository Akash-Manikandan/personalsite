<script lang="ts">
	import Globe from '../components/Globe.svelte';
	import { isOpen } from '../stores/stores';
	let width: number;
</script>

<svelte:head>
	<title>Akash | Contact</title>
	<link href="https://fonts.googleapis.com/css2?family=Prompt&display=swap" rel="stylesheet" />
</svelte:head>

<div bind:clientWidth={width} />
<main
	class="grid grid-cols-2 max-md:grid-cols-1 gap-y-24 mb-5 max-md:gap-11 justify-items-center absolute main-container w-full"
	style={$isOpen ? 'top: 410px' : 'top: 35%'}
>
	<div class="flex flex-col items-center gap-3">
		<p>GitHub</p>
		<a
			class="flex items-center justify-center"
			target="_blank"
			rel="noreferrer"
			href="https://github.com/Akash-Manikandan"
			title="Akash-Manikandan"
		>
			<img
				src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
				alt="github"
				width="40%"
				height="40%"
			/>
		</a>
	</div>
	<div class="flex flex-col items-center gap-3">
		<p>Twitter</p>
		<a
			class="flex items-center justify-center"
			target="_blank"
			rel="noreferrer"
			href="https://twitter.com/Akash2003M"
			title="Akash2003M"
		>
			<img
				src="https://img.freepik.com/free-icon/twitter_318-674515.jpg"
				alt="twitter"
				width="40%"
				height="40%"
			/>
		</a>
	</div>
	<div
		
		class="max-md:col-span-1 col-span-2 flex flex-col gap-8 items-center justify-center"
	>
		<p>Address</p>
		<Globe width={width > 768 ? width / 2.2 : width - 30} />
		<address class="pb-4">Chennai, Tamil Nadu, India</address>
	</div>
</main>

<style lang="scss">
	.main-container {
		transition: top 0.5s linear;
		text-align: left;
		font-family: 'Itim';
		font-size: larger;
	}
</style>
