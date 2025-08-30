<script lang="ts">
	import gif from '../assets/pfp.gif';
	import { darkMode, scrollToHome } from '$lib';
	import { socialMedia } from '$lib/data';
</script>

<footer
	class={`flex  h-20 w-full items-center justify-between gap-4 border-t px-10 
py-4    ${$darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
>
	<!-- Logo -->
	<a href="/" class="flex-shrink-0">
		<img src={gif} alt="pfp" class="h-12 max-md:h-10 max-sm:h-8" />
	</a>

	<!-- Socials -->
	<div class="max-sm:text-md flex gap-4 text-xl max-md:justify-center max-md:text-lg">
		{#each socialMedia as { title, id, url } (id)}
			<a href={url} aria-label="socmed">
				<i class={`bi bi-${title}`}></i>
			</a>
		{/each}
	</div>

	<!-- Button -->
	<button
		aria-label="button"
		on:click={() => scrollToHome('home')}
		class={`flex rounded-full p-2 max-md:hidden
        ${$darkMode ? 'bg-light text-dark' : 'bg-dark text-light'}`}
	>
		<i class="bi bi-arrow-up"></i>
	</button>
</footer>
