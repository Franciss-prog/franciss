<script>
	import { darkMode, toggleMode } from '$lib';
</script>

<nav
	class="flex h-16 w-full items-end justify-between border-b p-3 {$darkMode
		? 'bg-dark text-light'
		: 'bg-light text-dark'} border-b border-dashed"
>
	<div class="flex items-center gap-5">
		<div class="flex gap-2">
			<i class="bi bi-circle-fill text-red-500"></i>
			<i class="bi bi-circle-fill text-orange-500"></i>
			<i class="bi bi-circle-fill text-green-400"></i>
		</div>
		<a href="/" class="text-2xl max-md:text-xl max-sm:text-lg">franciss@portfolio</a>
	</div>

	<!-- Proper Svelte event binding -->
	<button onclick={toggleMode} class="text-xl">
		{#if $darkMode}
			<i class="bi bi-sun"></i>
		{:else}
			<i class="bi bi-moon"></i>
		{/if}
	</button>
</nav>
