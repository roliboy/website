<script lang="ts">
	import { goto } from '$app/navigation';

	export let height: string = 'h-screen';
	export let showBack: boolean = false;

	const goBack = () => {
		goto(document.referrer || '/');
	};
</script>

<div class="w-full {height}">
	<slot name="canvas" />
	<header class="w-full h-full bg-header bg-center bg-no-repeat bg-cover">
		<nav class="absolute top-0 right-0 w-full flex justify-center md:justify-end">
			<div class="pt-8 md:p-16 text-md md:text-xl nav-links">
				<slot name="links" />
			</div>
		</nav>
		{#if showBack}
			<div class="hidden md:block absolute top-0 left-0">
				<div class="cursor-pointer flex items-center text-xl m-8 md:m-16" on:click={goBack}>
					<span class="pb-1 pr-2">←</span>
					<p>back</p>
				</div>
			</div>
		{/if}
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
