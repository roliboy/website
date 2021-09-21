<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import ProjectItem from '$lib/project/ProjectItem.svelte';
	import projects from '../data/projects.json';
	import Shapes from '$lib/header/Shapes.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Header>
	<div slot="canvas"><Shapes /></div>
	<div slot="title">roliboy</div>
	<div slot="subtitle">1337 h4x0r, ctf player and certified brainlet</div>
	<div slot="links">
		<a href="#projects" class="link-underline">Projects</a>
		<a href="#about" class="link-underline ml-8 md:ml-16">About</a>
		<a href="#contact" class="link-underline ml-8 md:ml-16">Contact</a>
	</div>
</Header>

<section id="projects" class="section">
	<div class="content">
		<h2 class="heading">Projects</h2>

		<div class="mb-32">
			{#each projects.filter((project) => project.featured) as project}
				<ProjectItem {project} />
			{/each}
		</div>

		<div class="flex justify-center">
			<a
				sveltekit:prefetch
				href="/projects"
				class="link-fill overflow-hidden hover:rounded text-4xl font-saira flex items-center"
			>
				<p>More Projects</p>
				<span class="pl-4 pb-2">→</span>
			</a>
		</div>
	</div>
</section>
<!-- <section id="projects" class="py-48 border-b-2 border-background-light">
	<h2 class="heading ml-40">About</h2>
</section>
<section id="projects" class="py-48 border-b-2 border-background-light">
	<h2 class="heading ml-40">Contact</h2>
</section> -->
<Footer />

<style lang="postcss">
	.heading {
		@apply text-6xl text-primary after:block after:h-0.5 after:w-32 after:bg-secondary after:my-6;
	}
</style>
