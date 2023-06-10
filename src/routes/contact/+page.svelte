<script lang="ts">
	import { isOpen } from '../stores/stores';
</script>

<svelte:head>
	<title>Akash | Contact</title>
</svelte:head>

<main
	class="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-11 justify-items-center absolute main-container w-full"
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
</main>

<style lang="scss">
	.main-container {
		transition: top 0.5s linear;
		text-align: left;
		font-family: 'Itim';
		font-size: larger;
	}
</style>
