<script>
	import Canvas from './Canvas.svelte';
</script>

<div class="w-full h-screen overflow-hidden">
	<Canvas />
	<header class="w-full h-full bg-header bg-center bg-no-repeat bg-cover">
		<nav class="absolute top-0 right-0 w-full flex justify-center md:justify-end">
			<div class="pt-8 md:p-16 text-lg md:text-xl">
				<a href="#projects" class="link-underline">Projects</a>
				<a href="#about" class="link-underline md:ml-16">About</a>
				<a href="#contact" class="link-underline md:ml-16">Contact</a>
			</div>
		</nav>
		<div class="flex justify-center md:justify-start md:pl-16 items-center h-full">
			<div class="text-center md:text-left">
				<h1 class="text-5xl md:text-6xl text-primary mb-4">roliboy</h1>
				<p class="text-sm md:text-lg">1337 h4x0r, ctf player and certified brainlet</p>
			</div>
		</div>
	</header>
</div>

<style lang="postcss">
</style>
