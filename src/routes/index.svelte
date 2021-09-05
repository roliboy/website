<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Project from '$lib/Project.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Header />
<section id="projects" class="py-48 border-b-2 border-background-light">
	<h2 class="heading ml-40">Projects</h2>
	<div class="max-w-screen-xl mx-auto">
		<Project />
	</div>
</section>
<section id="projects" class="py-48 border-b-2 border-background-light">
	<h2 class="heading ml-40">About</h2>
</section>
<section id="projects" class="py-48 border-b-2 border-background-light">
	<h2 class="heading ml-40">Contact</h2>
</section>
<Footer />

<style lang="postcss">
	.heading {
		@apply text-6xl text-primary after:block after:h-0.5 after:w-32 after:bg-secondary after:my-6;
	}
</style>
