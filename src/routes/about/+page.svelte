<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { isOpen } from '../stores/stores';
	import { cubicOut } from 'svelte/easing';
	const progress = tweened(15, {
		duration: 1000,
		easing: cubicOut
	});

	$: if (!$isOpen) {
		progress.set(15);
	} else {
		progress.set(25);
	}
	let visible = true;
	$: if ($progress == 15) {
		visible = true;
	} else {
		visible = false;
	}
	let para: string[] = [
		`Welcome to my personal website! I'm Akash M, a passionate software developer with expertise in full-stack development. With a strong foundation in both front-end and back-end technologies, I thrive on building dynamic and user-centric applications that make a positive impact.`,
		`As a full-stack developer, I possess a comprehensive understanding of the entire software development process. I excel at creating seamless user experiences by crafting intuitive and visually appealing front-end interfaces. From HTML, CSS, and JavaScript to modern frameworks like React, Angular and Svelte, I leverage my skills to bring ideas to life and make them shine.`,
		`On the back-end, I have honed my skills in server-side programming languages such as TypeScript and Rust. Working with frameworks like Node.js and NestJS, I develop robust server logic and integrate complex functionalities. I'm well-versed in database design and management, utilizing SQL and NoSQL databases to store and retrieve data efficiently.`,
		`With a keen eye for detail and a strong problem-solving mindset, I thrive on tackling complex challenges and finding elegant solutions. I am constantly up-to-date with the latest industry trends and technologies, ensuring that I can leverage the best tools and frameworks to deliver high-quality and scalable software solutions.`,
		`Collaboration and effective communication are at the core of my work. I enjoy working closely with designers, project managers, and fellow developers to create cohesive and successful projects. I am a great team player, always open to learning from others and sharing my knowledge and insights.`,
		`In addition to my technical skills, I value a user-centered approach to software development. I believe that understanding the needs and expectations of end-users is crucial for creating applications that truly make a difference. By combining my technical expertise with a deep understanding of user experience and usability principles, I strive to deliver intuitive and impactful software solutions.`,
		`When I'm not coding, you can find me exploring new technologies, attending tech conferences, and contributing to open-source projects. I am passionate about continuous learning and believe that staying curious and adaptable is essential in the ever-evolving field of software development.`,
		`Thank you for visiting my website. I'm excited to share my work and projects with you. Feel free to reach out if you have any questions, collaborations, or opportunities. Let's build something amazing together!`
	];
</script>

<svelte:head>
	<title>Akash | About</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Maven+Pro&family=Nunito&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if !$isOpen && visible}
	<h1 class="text-left ml-8 mt-8 font-bold text-3xl" style="font-family: 'Maven Pro', sans-serif;">
		About
	</h1>
{/if}
<div class="absolute" style={'top:' + $progress + 'rem'}>
	<div
		class="bg-[#f0e2e1] dark:bg-[#18181890] max-sm:m-2 m-5 mb-8 rounded-lg text-lg max-md:text-base max-sm:text-sm"
		style="font-family: 'Nunito', sans-serif;"
	>
		{#each para as p}
			<p class="px-3 py-2 text-left">{p}</p>
		{/each}
	</div>
	<div class="flex w-full items-center justify-center my-5">
		<iframe
			width="550px"
			height="630px"
			title="Resume"
			src="https://drive.google.com/file/d/10kJ5-fgr0JhdUU3je9iBQ1pt4-SZmXeE/preview"
		/>
	</div>
</div>
