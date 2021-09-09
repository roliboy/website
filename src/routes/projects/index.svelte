<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import projects from '../../data/projects.json';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<Header height="h-screen/2">
	<!-- <div slot="canvas"><Shapes /></div> -->
	<div slot="title">projects</div>
	<!-- <div slot="subtitle">1337 h4x0r, ctf player and certified brainlet</div> -->
	<!-- <div slot="links">
		<a href="#projects" class="link-underline">Projects</a>
		<a href="#about" class="link-underline ml-8 md:ml-16">About</a>
		<a href="#contact" class="link-underline ml-8 md:ml-16">Contact</a>
	</div> -->
</Header>

<div class="container pt-40 px-8 mx-auto">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
		{#each projects as project}
			<a
				sveltekit:prefetch
				href={project.slug}
				class="shadow rounded overflow-hidden cursor-pointer bg-background-light transition-all hover:shadow-2xl hover:scale-105"
			>
				<img
					alt="cover"
					src="https://fight24-production.s3.eu-central-1.amazonaws.com/dimensions/medium/placeholder-720p.jpg"
					class="w-full transform bg-center bg-cover"
				/>
				<div class="p-4">
					<p class="text-xl mb-2 text-primary">{project.name}</p>
					<div class="flex flex-wrap justify-end mb-2">
						{#each project.tags as tag}
							<div class="m-1 py-1 px-2 rounded-lg text-primary border border-primary">
								<div class="text-sm leading-none">{tag}</div>
							</div>
						{/each}
					</div>
					<p class="text-sm">
						{project.description}
					</p>
				</div>
			</a>
		{/each}
	</div>
</div>
<Footer />

<style lang="postcss">
	.heading {
		@apply text-6xl text-primary after:block after:h-0.5 after:w-32 after:bg-secondary after:my-6;
	}
</style>
