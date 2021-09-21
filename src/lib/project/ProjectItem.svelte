<script lang="ts">
	export let index: number;
	export let project: Project;
	$: reversed = index % 2 == 1;
</script>

<div
	class="w-full flex flex-col md:items-center {reversed ? 'md:flex-row-reverse' : 'md:flex-row'}"
>
	<div class="md:w-1/4 z-10 flex flex-col {reversed ? 'md:items-end' : 'md:items-start'}">
		<div class="p-8 flex flex-col {reversed ? 'md:items-end' : 'md:items-start'}">
			<span class="text-primary text-sm">featured project</span>
			<h3 class="text-4xl">{project.name}</h3>
		</div>
		<div
			class="rounded overflow-hidden shadow-lg bg-background-light p-4 {reversed
				? 'md:-ml-40'
				: 'md:-mr-40'}"
		>
			<p>{project.description}</p>
		</div>
		<div class="p-4 w-full">
			<div class="flex flex-wrap {reversed ? 'justify-end' : 'justify-start'}">
				{#each project.tags as tag}
					<div class="m-1 py-1 px-2 rounded-lg text-primary border border-primary">
						<div class="text-sm leading-none">{tag}</div>
					</div>
				{/each}
			</div>
			<div class="flex justify-around items-center mt-8">
				<a href={project.repository} target="blank">
					<svg
						class="w-8 fill-current text-foreground transition-all hover:scale-125"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						/>
					</svg>
				</a>
				<a href={project.website} target="blank" class={project.website == '' ? 'hidden' : 'block'}>
					<svg
						class="w-8 fill-current text-foreground transition-all hover:scale-125"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path
							d="M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z"
						/>
					</svg>
				</a>
				<a sveltekit:prefetch href={project.slug}>
					<svg
						class="w-8 fill-current text-foreground transition-all hover:scale-125"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
	<div class="md:w-3/4">
		<a sveltekit:prefetch href={project.slug}>
			<img
				alt="cover"
				class="rounded w-full brightness-75 hover:brightness-100 transition-all shadow-lg hover:shadow-2xl"
				src={project.cover}
			/>
		</a>
	</div>
</div>

<style lang="postcss">
</style>
