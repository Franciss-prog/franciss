<script lang="ts">
	import gif from '../assets/pfp.gif';
	import { darkMode, scrollToHome } from '$lib';
	import { socialMedia } from '$lib/data';
</script>

<footer
	class={`flex h-20 flex-wrap items-center justify-between gap-4 border-t px-10 py-4 max-md:h-auto
    ${$darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
>
	<!-- Logo -->
	<a href="/" class="flex-shrink-0">
		<img src={gif} alt="pfp" class="h-12" />
	</a>

	<!-- Socials -->
	<div class="flex gap-4 max-md:order-3 max-md:w-full max-md:justify-center">
		{#each socialMedia as { title, id, url } (id)}
			<a href={url} aria-label="socmed" class="text-xl">
				<i class={`bi bi-${title}`}></i>
			</a>
		{/each}
	</div>

	<!-- Button -->
	<button
		aria-label="button"
		on:click={() => scrollToHome('home')}
		class={`flex rounded-full p-2 max-sm:order-2 max-sm:w-full max-sm:justify-center
        ${$darkMode ? 'bg-light text-dark' : 'bg-dark text-light'}`}
	>
		<i class="bi bi-arrow-up"></i>
	</button>
</footer>
