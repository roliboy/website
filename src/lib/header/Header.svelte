<script lang="ts">
	// import { page } from '$app/stores';
	// import logo from './svelte-logo.svg';
</script>

<header class="w-full h-screen bg-header bg-center bg-no-repeat bg-cover">
	<div id="canvas" />
	<nav>
		<div class="flex justify-end p-16 text-xl">
			<a href="#projects" class="link ml-16">Projects</a>
			<a href="#about" class="link ml-16">About</a>
			<a href="#contact" class="link ml-16">Contact</a>
		</div>
	</nav>
	<div class="p-16 absolute top-2/4 -translate-y-2/4">
		<h1 class="text-6xl text-primary mb-4">roliboy</h1>
		<p>1337 h4x0r, ctf player and certified brainlet</p>
	</div>
</header>

<style lang="postcss">
	.link {
		@apply relative p-4 after:absolute after:bottom-0 after:left-0 after:right-full after:h-4 after:bg-white after:transition-all hover:text-primary hover:after:right-0 hover:after:h-1 hover:after:bg-primary;
	}
</style>
