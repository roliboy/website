<script context="module" lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import Screenshot from '$lib/Screenshot.svelte';

	export const prerender = true;
</script>

<Header height="h-screen/2">
	<div slot="title">raytracer</div>
	<div slot="subtitle">Simple ray tracer written in C</div>
	<div slot="links">
		<a href="#description" class="nav-link">Description</a>
		<a href="#screenshots" class="nav-link">Screenshots</a>
		<!-- <a href="#setup" class="nav-link">Setup</a> -->
	</div>
</Header>

<section id="description" class="section">
	<div class="content">
		<h2 class="heading">Description</h2>
	</div>
	<div class="content text-xl">
		<p>
			Simple ray tracer written in C, implemented following Peter Shirley's <a
				href="https://www.realtimerendering.com/raytracing/Ray%20Tracing%20in%20a%20Weekend.pdf"
				class="text-primary"
			>
				Ray Tracing in One Weekend
			</a>,
			<a
				href="https://www.realtimerendering.com/raytracing/Ray%20Tracing_%20The%20Next%20Week.pdf"
				class="text-primary">Ray Tracing the Next Week</a
			>
			and
			<a
				href="https://www.realtimerendering.com/raytracing/Ray%20Tracing_%20the%20Rest%20of%20Your%20Life.pdf"
				class="text-primary">Ray Tracing the Rest of Your Life</a
			> books, with some extra features like cross-platform multithread rendering and realtime output
			to window, scene loading and a python library for generating the scene files.
		</p>
		<p>
			The code is structured in an object-oriented style, with a custom allocator used for memory
			management. The ray hit checker algorithm makes use of compiler intrinsics for extra
			performance on platforms that support the AVX256 instruction set.
		</p>
	</div>
</section>

<section id="screenshots" class="section">
	<div class="content">
		<h2 class="heading">Screenshots</h2>
	</div>
	<div class="content">
		<Screenshot>
			<div slot="image">
				<img
					alt="diffuse, metal and dielectric materials"
					src="/images/raytracer/book1.png"
					class="w-full"
				/>
			</div>
			<div slot="description">Material types like diffuse, isotropic, metal and dielectric</div>
		</Screenshot>
		<Screenshot>
			<div slot="image">
				<img
					alt="light emission, reflections and shadows"
					src="/images/raytracer/book1-lights.png"
					class="w-full"
				/>
			</div>
			<div slot="description">Light emission, ambiental lighting, reflections and shadows</div>
		</Screenshot>
		<Screenshot>
			<div slot="image">
				<img
					alt="textures, subsurface scattering, fog and motion blur"
					src="/images/raytracer/book2.png"
					class="w-full"
				/>
			</div>
			<div slot="description">
				Static and procedural textures, subsurface scattering, fog and motion blur
			</div>
		</Screenshot>
	</div>
</section>

<Footer />

<style lang="postcss">
	p {
		@apply mb-2 last:mb-0;
	}
</style>
