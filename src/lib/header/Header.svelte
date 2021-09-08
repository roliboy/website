<script lang="ts">
	export let height: string;
</script>

<div class="w-full {height}">
	<slot name="canvas" />
	<header class="w-full h-full bg-header bg-center bg-no-repeat bg-cover">
		<nav class="absolute top-0 right-0 w-full flex justify-center md:justify-end">
			<div class="pt-8 md:p-16 text-lg md:text-xl nav-links">
				<slot name="links" />
			</div>
		</nav>
		<div class="flex justify-center md:justify-start md:pl-16 items-center h-full">
			<div class="text-center md:text-left">
				<h1 class="text-5xl md:text-6xl text-primary mb-4">
					<slot name="title" />
				</h1>
				<p class="text-sm md:text-lg">
					<slot name="subtitle" />
				</p>
			</div>
		</div>
	</header>
</div>

<style lang="postcss">
</style>
