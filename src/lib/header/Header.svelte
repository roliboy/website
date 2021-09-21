<script lang="ts">
	export let height: string = 'h-screen';
</script>

<div class="w-full {height}">
	<slot name="canvas" />
	<header class="w-full h-full bg-header bg-center bg-no-repeat bg-cover">
		<nav class="absolute top-0 left-0 w-full flex justify-center md:justify-between">
			<div class="hidden md:block p-8">
				<a sveltekit:prefetch href="/">
					<svg
						class="w-10 h-10 fill-current text-foreground transition-all hover:text-primary"
						viewBox="0 0 64 64"
					>
						<path
							d="m34.5297 1.8158 29.5132 17.0395-22.7674 13.1447 22.7674 13.1447-24.4538 14.1184v-5.8421l14.335-8.2763-14.335-8.2763v-9.7368l14.335-8.2763-14.335-8.2763v48.6842l-5.0594 2.9211zm-5.0594 0-29.5132 17.0395 22.7674 13.1447-22.7674 13.1447 5.0594 2.9211 19.3944-11.1974v-9.7368l-14.335-8.2763 14.335-8.2763v48.6842l5.0594 2.9211z"
						/>
					</svg>
				</a>
			</div>
			<div class="pt-8 md:p-8 text-md md:text-xl">
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
