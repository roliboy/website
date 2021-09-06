<script>
	import Canvas from './Canvas.svelte';
</script>

<header class="w-full h-screen bg-header bg-center bg-no-repeat bg-cover">
	<Canvas />
	<nav>
		<div class="flex justify-end p-16 text-xl">
			<a href="#projects" class="link-underline ml-16">Projects</a>
			<a href="#about" class="link-underline ml-16">About</a>
			<a href="#contact" class="link-underline ml-16">Contact</a>
		</div>
	</nav>
	<div class="p-16 absolute top-2/4 -translate-y-2/4">
		<h1 class="text-6xl text-primary mb-4">roliboy</h1>
		<p>1337 h4x0r, ctf player and certified brainlet</p>
	</div>
</header>

<style lang="postcss">
</style>
