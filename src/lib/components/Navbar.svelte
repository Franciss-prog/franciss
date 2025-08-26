<script>
	import { darkMode, toggleMode } from '$lib';
</script>

<nav
	class="flex h-16 w-full items-end justify-between border-b p-3 {$darkMode
		? 'bg-dark text-light'
		: 'bg-light text-dark'} border-b"
>
	<div class="flex gap-2">
		<div>
			<i class="bi bi-circle-fill text-red-500"></i>
			<i class="bi bi-circle-fill text-orange-500"></i>
			<i class="bi bi-circle-fill text-green-400"></i>
		</div>
		<div><a href="/">franciss@portfolio</a></div>
	</div>

	<!-- Proper Svelte event binding -->
	<button onclick={toggleMode} class="text-xl">
		{#if $darkMode}
			<i class="bi bi-brightness-alt-high"></i>
		{:else}
			<i class="bi bi-moon"></i>
		{/if}
	</button>
</nav>
