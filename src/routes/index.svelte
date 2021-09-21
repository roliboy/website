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
		<a href="#projects" class="nav-link">Projects</a>
		<a href="#about" class="nav-link">About</a>
		<a href="#contact" class="nav-link">Contact</a>
	</div>
</Header>

<section id="projects" class="section">
	<div class="content">
		<h2 class="heading">Projects</h2>
	</div>

	<div class="content">
		{#each projects.filter((project) => project.featured) as project}
			<ProjectItem {project} />
		{/each}
	</div>

	<div class="content">
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
<!-- <section id="projects" class="section">
	<div class="content">
		<h2 class="heading">About</h2>
	</div>
</section>
<section id="projects" class="section">
	<div class="content">
		<h2 class="heading">Contact</h2>
	</div>
</section> -->
<Footer />

<style lang="postcss">
</style>
