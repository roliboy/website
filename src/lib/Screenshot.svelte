<script lang="ts">
</script>

<div
	class="flex flex-col md:even:flex-row-reverse md:odd:flex-row items-center gap-x-16 mb-16 last:mb-0 md:even:text-left md:odd:text-right"
>
	<div class="md:w-3/4">
		<div class="shadow-2xl rounded overflow-hidden">
			<slot name="image" />
		</div>
	</div>
	<div class="md:w-1/4">
		<p class="text-lg md:text-xl">
			<slot name="description" />
		</p>
	</div>
</div>

<style lang="postcss">
</style>
