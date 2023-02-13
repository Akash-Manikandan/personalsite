<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import { quadOut } from 'svelte/easing';
	import '../app.css';
	import { isDarkMode, isOpen } from './stores/stores';
	let navigationList = [
		{ name: 'Home', navigationRoute: '/' },
		{ name: 'About', navigationRoute: '/about' },
		{ name: 'Works', navigationRoute: '/works' },
		{ name: 'Contact', navigationRoute: '/contact' }
	];
	let srcDark: string = 'home/darkmode2.png';
	let srcLight: string = 'home/lightmode.png';
	let darkMode: boolean;
	let open: boolean;
	let width: number;
	let logoSrc: string = 'logos/light1.png';
	const handleSwitchDarkMode = (value: boolean) => {
		darkMode = value;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
		const random: number = Math.floor(Math.random() * 3) + 1;
		if (darkMode) {
			logoSrc = 'logos/dark' + random + '.png';
		} else {
			logoSrc = 'logos/light' + random + '.png';
		}
	};
	if (browser) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
	onMount(() => {
		const mode = localStorage.getItem('theme');
		if (mode != null) {
			darkMode = mode == 'dark' ? true : false;
		} else {
			darkMode = false;
		}
		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');

		const random: number = Math.floor(Math.random() * 3) + 1;
		if (darkMode) {
			logoSrc = 'logos/dark' + random + '.png';
		} else {
			logoSrc = 'logos/light' + random + '.png';
		}
	});
	$: isOpen.set(open);
	$: isDarkMode.set(darkMode);
	$: if (width > 560) {
		open = false;
		isOpen.set(false);
	}
</script>

<svelte:window bind:innerWidth={width} />

<svelte:head>
	<meta name="description" content="Personal Site Maintained By Akash M" />
	<link href="https://fonts.googleapis.com/css2?&family=Itim&display=swap" rel="stylesheet" />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css"
	/>
</svelte:head>
<header>
	<nav class="navigation">
		<!-- <h3>Ak</h3> -->
		<a href="/" class="m-4 md:m-6 lg:m-8 xl:m-10">
			<img
				src={logoSrc}
				alt={logoSrc}
				width="50"
				height="50"
				style={darkMode ? 'mix-blend-mode:lighten' : 'mix-blend-mode:darken'}
			/>
		</a>
		{#if width > 560}
			<ul>
				{#each navigationList as elements}
					<li>
						<a class="after:bg-[#f25042] dark:after:bg-[#eebbc3]" data-sveltekit-preload-data="hover" href={elements.navigationRoute}
							>{elements.name}</a
						>
					</li>
				{/each}
			</ul>
		{:else}
			<Hamburger bind:open --color={darkMode ? 'white' : 'black'} />
		{/if}
	</nav>
</header>
{#if $isOpen && width <= 560}
	<div>
		{#each navigationList as link, i}
			<a href={link.navigationRoute}>
				<p transition:fly={{ y: -15, delay: 50 * i }}>
					{link.name}
				</p>
			</a>
		{/each}
	</div>
	<div style="display: flex;justify-content:center;align-items: center; padding-bottom:10px">
		<hr
			transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }}
			class="bg-black rounded dark:bg-white"
		/>
	</div>
{/if}

{#if darkMode}
	<button
		on:click={() => handleSwitchDarkMode(false)}
		in:fly={{ y: -300, duration: 3000, delay: 800 }}
		out:fly={{ y: 400, duration: 800 }}
	>
		<img src={srcDark} alt="darkmode" />
	</button>
{:else}
	<button
		on:click={() => handleSwitchDarkMode(true)}
		in:fly={{ y: -300, duration: 3000, delay: 800 }}
		out:fly={{ y: 400, duration: 800 }}
	>
		<img src={srcLight} alt="lightmode" />
	</button>
{/if}

<slot />

<style lang="scss">
	header {
		height: 100px;
	}
	.navigation {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		font-family: 'Itim', monospace;
		justify-content: space-between;
		/* h3 {
			margin-left: 40px;
			font-size: 40px;
			font-weight: 500;
		} */
		a {
			img {
				mix-blend-mode: lighten;
			}
		}
		ul {
			display: flex;
			list-style: none;
			padding: 0;
			width: 100%;
			justify-content: flex-end;
			margin-right: 40px;
			gap: 50px;
			font-size: 20px;
			li {
				display: flex;
				align-items: center;
				a {
					text-decoration: none;
					display: inline-block;
					position: relative;
					&::after {
						content: '';
						position: absolute;
						width: 100%;
						transform: scaleX(0);
						height: 2px;
						bottom: 0;
						left: 0;
						//background-color: #eebbc3;
						transform-origin: bottom right;
						transition: transform 0.25s ease-out;
					}
					&:hover:after {
						transform: scaleX(1);
						transform-origin: bottom left;
					}
				}
			}
		}
	}

	button {
		z-index: 4;
		right: 0px;
		top: 15%;
		position: absolute;
		padding-right: 10px;
		color: transparent;
		border: 0;
		outline: 0;
		background-color: transparent;
		img[alt='darkmode'] {
			transform: scaleX(-1);
			filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.12));
		}
		img {
			width: 120px;
			height: 120px;
		}
	}

	div {
		display: flex;
		flex-direction: column;
		font-size: 1.5em;
	}
	p {
		cursor: pointer;
		width: max-content;
		margin: 1rem auto;
	}
	p:hover {
		text-decoration: underline;
	}
	hr {
		width: 80%;
		align-items: center;
	}
	@media screen and (max-width: 768px) {
		button {
			img {
				width: 80px;
				height: 80px;
			}
		}
	}
</style>
