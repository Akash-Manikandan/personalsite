<script lang="ts">
	import WorksCard from '../components/WorksCard.svelte';
	import { isOpen } from '../stores/stores';

	let data = [
		{
			id: 1,
			name: 'Assignment Site',
			deployment: 'assignment1-akash.vercel.app',
			github: 'https://github.com/Akash-Manikandan/assignment1',
			description: `This is an assignment website focused on the beauty of nature. Built with Next.js, the
					website provides a seamless user experience with fast loading times and smooth navigation.
					To enhance the user experience, the website employs framer motion, a powerful animation
					library, to bring the content to life with smooth and engaging animations.`,
			image: '/works/AssignmentSite.png'
		},
		{
			id: 2,
			name: 'Assignment Site',
			deployment: 'assignment1-akash.vercel.app',
			github: 'https://github.com/Akash-Manikandan/assignment1',
			description: `This is an assignment website focused on the beauty of nature. Built with Next.js, the
					website provides a seamless user experience with fast loading times and smooth navigation.
					To enhance the user experience, the website employs framer motion, a powerful animation
					library, to bring the content to life with smooth and engaging animations.`,
			image: '/works/AssignmentSite.png'
		},
		{
			id: 3,
			name: 'Assignment Site',
			deployment: 'assignment1-akash.vercel.app',
			github: 'https://github.com/Akash-Manikandan/assignment1',
			description: `This is an assignment website focused on the beauty of nature. Built with Next.js, the
					website provides a seamless user experience with fast loading times and smooth navigation.
					To enhance the user experience, the website employs framer motion, a powerful animation
					library, to bring the content to life with smooth and engaging animations.`,
			image: '/works/AssignmentSite.png'
		},
		{
			id: 4,
			name: 'Assignment Site',
			deployment: 'assignment1-akash.vercel.app',
			github: 'https://github.com/Akash-Manikandan/assignment1',
			description: `This is an assignment website focused on the beauty of nature. Built with Next.js, the
					website provides a seamless user experience with fast loading times and smooth navigation.
					To enhance the user experience, the website employs framer motion, a powerful animation
					library, to bring the content to life with smooth and engaging animations.`,
			image: '/works/AssignmentSite.png'
		},
		{
			id: 5,
			name: 'Assignment Site',
			deployment: 'assignment1-akash.vercel.app',
			github: 'https://github.com/Akash-Manikandan/assignment1',
			description: `This is an assignment website focused on the beauty of nature. Built with Next.js, the
					website provides a seamless user experience with fast loading times and smooth navigation.
					To enhance the user experience, the website employs framer motion, a powerful animation
					library, to bring the content to life with smooth and engaging animations.`,
			image: '/works/AssignmentSite.png'
		}
	];
</script>

<svelte:head>
	<title>Akash | Works</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Kalam:wght@300;400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="absolute main-container flex flex-col gap-5" style={$isOpen ? 'top: 55%' : 'top: 35%'}>
	{#each data as item}
		<WorksCard data={item} />
	{/each}
</main>

<style lang="scss">
	.main-container {
		transition: top 0.5s linear;
		text-align: left;
	}
</style>
