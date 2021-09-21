<script context="module" lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/header/Header.svelte';

	export const prerender = true;
</script>

<Header height="h-screen/2">
	<div slot="title">raytracer</div>
	<div slot="subtitle">descriptive description</div>
	<!-- <div slot="links">
		<a href="#description" class="link-underline">Description</a>
		<a href="#packages" class="link-underline ml-4 md:ml-16">Packages</a>
		<a href="#setup" class="link-underline ml-4 md:ml-16">Setup</a>
	</div> -->
</Header>

<section id="description" class="section">
	<div class="container px-8 mx-auto">
		<h2 class="heading">Work in Progress</h2>
		<div class="text-lg">
			<p class="mb-2">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, reiciendis inventore! Beatae
				quo aspernatur, enim harum corrupti culpa odio accusantium rerum officiis porro in ea
				praesentium molestiae aut recusandae a.
			</p>
			<p class="mb-2">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam dolore aut voluptas
				doloremque possimus distinctio? Iste vero id minima eligendi debitis explicabo sapiente
				distinctio dicta magni blanditiis! Voluptate, odit eum!
			</p>
		</div>
	</div>
</section>

<Footer />

<style lang="postcss">
</style>
