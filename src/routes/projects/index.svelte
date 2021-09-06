<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import projects from '../../data/projects.json';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="max-w-screen-xl mx-auto">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
		{#each projects as project}
			<a
				href="#acolo"
				class="shadow rounded overflow-hidden cursor-pointer bg-background-light transition-all hover:shadow-2xl"
			>
				<img
					alt="cover"
					src="https://fight24-production.s3.eu-central-1.amazonaws.com/dimensions/medium/placeholder-720p.jpg"
					class="w-full object-cover"
				/>
				<div class="p-4">
					<p class="text-xl mb-2 text-primary">{project.name}</p>
					<div class="flex flex-wrap justify-end mb-2">
						<div class="m-1 py-1 px-2 rounded-lg text-primary border border-primary">
							<div class="text-sm leading-none">tag</div>
						</div>
						<div class="m-1 py-1 px-2 rounded-lg text-primary border border-primary">
							<div class="text-sm leading-none">tag</div>
						</div>
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
