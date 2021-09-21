<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import ProjectCard from '$lib/project/ProjectCard.svelte';
	import projects from '../../data/projects.json';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<Header height="h-screen/2">
	<div slot="title">projects</div>
	<!-- <div slot="subtitle">1337 h4x0r, ctf player and certified brainlet</div> -->
</Header>

<!-- TODO: search bar and filter by tags -->
<section id="projects" class="section">
	<div class="content">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>
<Footer />

<style lang="postcss">
</style>
