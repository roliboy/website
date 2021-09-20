<script lang="ts">
	export let project: Project;
</script>

<a
	sveltekit:prefetch
	href={project.slug}
	class="shadow rounded overflow-hidden cursor-pointer bg-background-light transition-all hover:shadow-2xl hover:scale-105 card"
>
	<img
		alt="cover"
		src={project.cover}
		class="w-full transform bg-center bg-cover brightness-75 transition-all"
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

<style lang="postcss">
	.card:hover > img {
		@apply brightness-100;
	}
</style>
