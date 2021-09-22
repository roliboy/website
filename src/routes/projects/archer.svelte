<script context="module" lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import Screenshot from '$lib/Screenshot.svelte';
	import { Highlight } from 'svelte-highlight';
	import bash from 'svelte-highlight/src/languages/bash';

	export const prerender = true;
</script>

<svelte:head>
	<title>archer</title>
</svelte:head>

<Header height="h-screen/2">
	<div slot="title">archer</div>
	<div slot="subtitle">automated arch linux installer</div>
	<div slot="links">
		<a href="#description" class="nav-link">Description</a>
		<a href="#usage" class="nav-link">Usage</a>
		<a href="#screenshots" class="nav-link">Screenshots</a>
	</div>
</Header>

<section id="description" class="section">
	<div class="content">
		<h2 class="heading">Description</h2>
	</div>
	<div class="content text-xl">
		<p class="mb-2">
			Archer is a setup script with a really simple core (around 200 lines of bash), and a flexible
			configuration system that allows you to customize the installation process the way you want,
			from zero-interaction headless setups all the way to guided installers with automatic mirror
			ranking.
		</p>
	</div>
</section>

<section id="usage" class="section">
	<div class="content">
		<h2 class="heading">Usage</h2>
	</div>
	<div class="content text-xl">
		<h3 class="mb-2 text-2xl">without custom configuration file</h3>
		<p class="mb-8">
			when no custom config file is provided, archer will use the interactive configuration, which
			is a TUI-based guided installer, you just have to follow the instructions.
		</p>
		<h3 class="mb-2 text-2xl">with custom configuration file</h3>
		<p class="mb-2">
			if you want to use a custom config file you can pass a path or an url as argument when
			invoking archer. config files are written in bash, so anything is fine as long as it's valid
			bash syntax and required variables are set (see example config file).
		</p>
	</div>
	<div class="content text-xl">
		<p class="mb-2">
			for building archer locally, use the makefile which will concatenate the individual scripts
			from the src directory.
		</p>
		<p class="mb-2">
			since archer is a single file bash script, you can use it directly by downloading the source
			with curl and feeding it to bash:
		</p>
		<Highlight
			language={bash}
			code={`curl roliboy.ml/archer | bash\n\n# if you want to provide a configuration file:\ncurl roliboy.ml/archer | bash -s <path|url>`}
		/>
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
					alt="password input field in guided mode"
					src="/images/archer/password.png"
					class="w-full"
				/>
			</div>
			<div slot="description">
				Without a custom configuration file, archer will launch an interactive, guided installer
			</div>
		</Screenshot>
		<Screenshot>
			<div slot="image">
				<img alt="mirrorlist latency testing" src="/images/archer/ping.png" class="w-full" />
			</div>
			<div slot="description">
				The guided installer has advanced features like mirrorlist latency testing
			</div>
		</Screenshot>
		<Screenshot>
			<div slot="image">
				<img alt="asd" src="/images/archer/mirrors.png" class="w-full" />
			</div>
			<div slot="description">
				Mirrors can be individually selected, based on the measured latency
			</div>
		</Screenshot>
	</div>
</section>

<Footer />

<style lang="postcss">
</style>
