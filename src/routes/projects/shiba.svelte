<script context="module" lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
	import { Highlight } from 'svelte-highlight';
	import bash from 'svelte-highlight/src/languages/bash';

	export const prerender = true;
</script>

<svelte:head>
	<title>shiba</title>
</svelte:head>

<Header height="h-screen/2">
	<div slot="title">shiba</div>
	<div slot="subtitle">good boie webdev companion</div>
	<div slot="links">
		<a href="#description" class="nav-link">Description</a>
		<a href="#usage" class="nav-link">Usage</a>
		<a href="#installation" class="nav-link">Installation</a>
	</div>
</Header>

<section id="description" class="section">
	<div class="content">
		<h2 class="heading">Description</h2>
	</div>
	<div class="content text-xl">
		<p class="mb-2">
			Shiba is your all-in-one webapp prototyping companion. A versatile and easy-to-use tool that
			can act as a static HTTP server, CORS proxy, REST API and more.
		</p>
	</div>
</section>

<section id="usage" class="section">
	<div class="content">
		<h2 class="heading">Usage</h2>
	</div>
	<div class="content text-xl">
		<p class="mb-2">
			When using shiba, you specify endpoints as command line parameters. Each endpoint will have an
			assoicated request handler:
		</p>

		<ul class="list-disc">
			<li class="mb-8">
				<h3 class="text-2xl mb-2">static</h3>
				<Highlight
					language={bash}
					code={`shiba static /      index.html\nshiba static /media images/`}
				/>
				<p class="mt-2">Used for statically serving local files and directories.</p>
			</li>
			<li class="mb-8">
				<h3 class="text-2xl mb-2">proxy</h3>
				<Highlight language={bash} code={`shiba proxy /api localhost:8080/api/v2`} />
				<p class="mt-2">
					Used for forwarding requests to a different server or endpoint and attaching CORS headers
					to responses.
				</p>
			</li>
			<li class="mb-8">
				<h3 class="text-2xl mb-2">command</h3>
				<Highlight
					language={bash}
					code={`shiba command /wordcount    'wc -w'\nshiba command /drop/{table} ./dropit`}
				/>
				<p class="mt-2">Used for executing commands and scripts.</p>
			</li>
			<li class="mb-8">
				<h3 class="text-2xl mb-2">resource</h3>
				<Highlight
					language={bash}
					code={`shiba resource /documents documents.sqlite3 [ title:string pages:int ]`}
				/>
				<p class="mt-2">Used for creating a REST resource that supports CRUD operations.</p>
			</li>
		</ul>
	</div>
	<div class="content text-xl">
		<p class="mb-2">
			For example, using the following parameters, shiba will statically host an index page and
			create an endpoint that counts the number of words in post data:
		</p>
		<Highlight
			language={bash}
			code={`shiba \\\n    static  /          index.html \\\n    command /wordcount 'wc -w'`}
		/>
	</div>
</section>

<section id="installation" class="section">
	<div class="content">
		<h2 class="heading">Installation</h2>
	</div>
	<div class="content text-xl">
		<p class="mb-2">
			Shiba was written entirely in bash, so you will only need a copy of the source file to get up
			and running.
		</p>
		<Highlight
			language={bash}
			code={`# curl | bash like real chads\ncurl -Ls roliboy.ml/shiba | bash -s static / index.html\n\n# or\n\n# assemble from source\ngit clone git@github.com:roliboy/shiba.git\ncd shiba\nmake\n./shiba static index.html`}
		/>
	</div>
	<div class="content text-xl">
		<p class="mb-2">
			Depending on your system, there might be some missing command line utilities required by
			shiba, please check that the following are installed:
		</p>
		<ul class="list-disc">
			<li>
				<a href="http://www.dest-unreach.org/socat" class="text-primary">socat</a> - listening for incoming
				connections and communicating with clients
			</li>
			<li>
				<a href="https://stedolan.github.io/jq" class="text-primary">jq</a> - for parsing and validating
				JSON
			</li>
			<li>
				<a href="https://github.com/sqlite/sqlite" class="text-primary">sqlite3</a> - for data storage
			</li>
		</ul>
	</div>
</section>

<Footer />

<style lang="postcss">
</style>
