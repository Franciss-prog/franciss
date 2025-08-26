<script lang="ts">
	import gif from '../assets/pfp.gif';
	import { darkMode, scrollToHome } from '$lib';
	import { socialMedia } from '$lib/data';
</script>

<footer
	class={`flex h-20 justify-between border-t  ${$darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} items-center px-10`}
>
	<a href="/"> <img src={gif} alt="pfp" class="h-12" /> </a>
	<div class="flex gap-4">
		{#each socialMedia as { title, id, url } (id)}
			<a href={url} aria-label="socmed" class="text-xl"> <i class={`bi bi-${title} `}></i></a>
		{/each}
	</div>
	<button
		aria-label="button"
		onclick={() => scrollToHome('home')}
		class={`rounded-full ${$darkMode ? 'bg-light text-dark' : 'bg-dark text-light'} p-2`}
	>
		<i class="bi bi-arrow-up"></i>
	</button>
</footer>
