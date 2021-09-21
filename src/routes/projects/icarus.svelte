<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Screenshot from '$lib/Screenshot.svelte';
	import Highlight from 'svelte-highlight';
	import bash from 'svelte-highlight/src/languages/bash';
</script>

<svelte:head>
	<title>icarus</title>
</svelte:head>

<Header height="h-screen/2">
	<div slot="title">icarus</div>
	<div slot="subtitle">Arch Linux repository for CTF players</div>
	<div slot="links">
		<a href="#description" class="nav-link">Description</a>
		<a href="#screenshots" class="nav-link">Screenshots</a>
		<a href="#setup" class="nav-link">Setup</a>
	</div>
</Header>

<section id="description" class="section">
	<div class="content">
		<h2 class="heading">Description</h2>
	</div>

	<div class="content">
		<p class="mb-2">
			Icarus is an Arch Linux package repository aiming to satisfy all your CTF needs.
		</p>
		<p class="mb-2">
			Its selection of packages range from popular tools all the way to obscure utilities, mainly
			focused on binary reversing, pwn, steganography and forensics. For a list of all packages and
			package categories consult the <a href="#packages" class="text-primary">packages</a> section down
			below.
		</p>
		<p class="mb-2">
			Most packages are built using PKGBUILDs from the Arch User Repository, some of which have been
			modified, and even custom ones. The PKGBUILDs for all packages in the repository can be found
			on <a href="https://github.com/roliboy/icarus" class="text-primary">github</a>. Broken
			packages can be reported on the github
			<a href="https://github.com/roliboy/icarus/issues" class="text-primary">issue tracker</a>.
			Contributions, suggestions and package requests are also welcome.
		</p>
		<p class="mb-2">
			If you are ready to give it a go, head over to the
			<a href="#setup" class="text-primary">setup</a> guide and follow the instructions. Officially only
			Arch Linux is supported, but other arch-based distributions such as manjaro, artix and arcolinux
			should also work.
		</p>

		<div class="py-4" />

		<p class="mb-2">
			Besides the PKGBUILDs, this project also contains a tool called the
			<a href="https://www.icarus-ctf.ml/console" class="text-primary">management console</a>, which
			automates the package building, signing and publishing. The management console can be accessed
			through a web interface which connects to the build server via websocket.
		</p>
		<p class="mb-2">
			The build server executes commands in a custom arch linux docker container, making the
			management console distribution-independent.
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
				<img alt="homepage screenshot" src="/images/icarus/homepage.png" />
			</div>
			<div slot="description">
				Homepage containing some useful links, news and setup information
			</div>
		</Screenshot>

		<Screenshot>
			<div slot="image">
				<img alt="management console screenshot" src="/images/icarus/packages.png" />
			</div>
			<div slot="description">
				Management console displaying package list, package details, actions and build output
			</div>
		</Screenshot>
	</div>
</section>

<section id="setup" class="section">
	<div class="content">
		<h2 class="heading">Setup</h2>
	</div>

	<div class="content">
		<div class="text-lg">
			<div class="mb-6">
				<p class="mb-2">1. Add the repository to your pacman configuration</p>
				<Highlight
					language={bash}
					code={`sed -i '$a [icarus]\\nServer = https://icarus-ctf.ml/$arch/$repo' /etc/pacman.conf`}
				/>
			</div>
			<div class="mb-6">
				<p class="mb-2">2. Import and sign GPG key</p>
				<Highlight
					language={bash}
					code={`pacman-key --recv-keys 372F9386D1AF98A74146412B7EB1976EC359E844\npacman-key --lsign-key 372F9386D1AF98A74146412B7EB1976EC359E844`}
				/>
			</div>
			<div class="mb-6">
				<p class="mb-2">3. Refresh package database</p>
				<Highlight language={bash} code={`pacman -Syy`} />
			</div>
			<div class="mb-6">
				<p class="mb-2">
					Now you are able to download and install packages from the icarus repository
				</p>
			</div>
			<div class="mb-6">
				<p class="mb-2">
					Tip: You can install packages without modifying your pacman configuration, by using the
					<code>-U</code> flag and the url of the desired package
				</p>
				<Highlight
					language={bash}
					code={`pacman -U https://icarus-ctf.ml/x86_64/icarus/python-pywhat-3.4.1-1-any.pkg.tar.zst`}
				/>
			</div>
		</div>
	</div>
</section>
<Footer />

<style lang="postcss">
</style>
