<div class="flex items-center w-full mt-24">
	<div class="w-1/4 z-10 flex flex-col items-start">
		<div class="p-8">
			<span class="text-primary">yolo</span>
			<h3 class="text-4xl">Project</h3>
		</div>
		<div class="rounded overflow-hidden shadow-lg bg-background-light -mr-40 p-4">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta repellendus delectus
				accusantium! Dolorem libero, non tempore quam unde molestias quibusdam?
			</p>
		</div>
		<div class="p-4 w-full">
			<div class="flex flex-wrap">
				<div class="m-1 py-1 px-2 rounded-lg text-primary border border-primary">
					<div class="text-sm leading-none">Angular</div>
				</div>
				<div class="m-1 py-1 px-2 rounded-lg text-primary border border-primary">
					<div class="text-sm leading-none">is</div>
				</div>
				<div class="m-1 py-1 px-2 rounded-lg text-primary border border-primary">
					<div class="text-sm leading-none">awful</div>
				</div>
			</div>
			<div class="flex justify-around items-center mt-8">
				<a class="link hover:rounded hover:overflow-hidden" href="#"
					>Read More <span class="pl-4">→</span></a
				>
				<a href="#">
					<svg
						class="w-8 fill-current text-foreground transition-all hover:scale-125"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>

	<div class="w-3/4">
		<img
			class="mx-auto rounded w-full"
			src="https://i.pinimg.com/originals/ba/d6/91/bad6913bcf635399fcaf839ceba1c823.jpg"
		/>
	</div>
</div>

<style lang="postcss">
	.link {
		@apply relative p-2 border-b border-primary after:absolute after:top-0 after:left-0 after:right-full after:bg-foreground after:h-full after:transition-all hover:after:right-0 hover:after:bg-primary;
	}
	.link::after {
		z-index: -1;
	}
</style>
