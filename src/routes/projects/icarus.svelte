<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import Highlight from 'svelte-highlight';
	import plaintext from 'svelte-highlight/src/languages/plaintext';
	import bash from 'svelte-highlight/src/languages/bash';

	const step1 = `sed -i '$a [icarus]\\nServer = https://icarus-ctf.ml/$arch/$repo' /etc/pacman.conf`;
	const step2 = `pacman-key --recv-keys 372F9386D1AF98A74146412B7EB1976EC359E844
pacman-key --lsign-key 372F9386D1AF98A74146412B7EB1976EC359E844`;
	const step3 = `pacman -Syy`;
	const extra = `pacman -U https://icarus-ctf.ml/x86_64/icarus/python-pywhat-3.4.1-1-any.pkg.tar.zst`;

	// # 2. sync package database
	// 	pacman -Syy

	// # 3. install packages
	// 	pacman -S ciphey

	// # bonus: install packages without modifying pacman.conf
	// # pacman supports direct urls, copy the package url from <here>
	// 	pacman -S https://www.icarus-ctf.ml/x86_64/icarus/ciphey-5.14.0-1-any.pkg.tar.zst`;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<Header height="h-screen/2">
	<div slot="title">icarus</div>
	<div slot="subtitle">Arch Linux repository for CTF players</div>
	<div slot="links">
		<a href="#description" class="link-underline">Description</a>
		<a href="#packages" class="link-underline ml-4 md:ml-16">Packages</a>
		<a href="#setup" class="link-underline ml-4 md:ml-16">Setup</a>
	</div>
</Header>

<section id="description" class="section">
	<div class="container px-8 mx-auto">
		<h2 class="heading">Description</h2>
		<div class="text-lg">
			<p class="mb-2">
				Icarus is an Arch Linux package repository aiming to satisfy all your CTF needs.
			</p>
			<p class="mb-2">
				Its selection of packages range from popular tools all the way to obscure utilities, mainly
				focused on binary reversing, pwn, steganography and forensics. For a list of all packages
				and package categories consult the <a href="#packages" class="text-primary">packages</a> section
				down below.
			</p>
			<p class="mb-2">
				Most packages are built using PKGBUILDs from the Arch User Repository, some of which have
				been modified, and even custom ones. The PKGBUILDs for all packages in the repository can be
				found on <a href="#" class="text-primary">github</a>. Broken packages can be reported on the
				github <a href="#" class="text-primary">issue tracker</a>. Contributions, suggestions and
				package requests are also welcome.
			</p>
			<p class="mb-2">
				If you are ready to give it a go, head over to the
				<a href="#setup" class="text-primary">setup</a> guide and follow the instructions. Officially
				only Arch Linux is supported, but other arch-based distributions such as manjaro, artix and arcolinux
				should also work.
			</p>
			<p>May the flag gods bless your CTF journey, good luck and have fun!</p>
		</div>
	</div>
</section>
<section id="packages" class="section">
	<div class="container px-8 mx-auto">
		<h2 class="heading">Packages</h2>

		<div class="">
			<table class="w-full">
				<tr class="text-left text-primary font-bold ">
					<td class="px-4 py-3">Name</td>
					<td class="px-4 py-3">Version</td>
					<td class="px-4 py-3">Category</td>
					<td class="px-4 py-3">Description</td>
				</tr>
				<tr class="bg-background-dark">
					<td class="px-4 py-3">ciphey</td>
					<td class="px-4 py-3">5.10.0</td>
					<td class="px-4 py-3">forensics</td>
					<td class="px-4 py-3">automated decryption tool</td>
				</tr>
				<tr class="bg-background-light">
					<td class="px-4 py-3">rockyou</td>
					<td class="px-4 py-3">??</td>
					<td class="px-4 py-3">misc</td>
					<td class="px-4 py-3">password masterlist</td>
				</tr>
				<tr class="bg-background-dark">
					<td class="px-4 py-3">something</td>
					<td class="px-4 py-3">1.2.3</td>
					<td class="px-4 py-3">something</td>
					<td class="px-4 py-3">Lorem ipsum dolor sit amet consectetur</td>
				</tr>
			</table>
		</div>
	</div>
</section>
<section id="setup" class="section">
	<div class="container px-8 mx-auto">
		<h2 class="heading">Setup</h2>
		<div class="text-lg">
			<div class="mb-6">
				<p class="mb-2">1. Add the repository to your pacman configuration</p>
				<Highlight language={bash} code={step1} />
			</div>
			<div class="mb-6">
				<p class="mb-2">2. Import and sign GPG key</p>
				<Highlight language={bash} code={step2} />
			</div>
			<div class="mb-6">
				<p class="mb-2">3. Refresh package database</p>
				<Highlight language={bash} code={step3} />
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
				<Highlight language={bash} code={extra} />
			</div>
		</div>
	</div>
</section>
<Footer />

<style lang="postcss">
</style>
