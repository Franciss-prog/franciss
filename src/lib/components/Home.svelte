<script>
	export let darkMode;
</script>

<section id="home">
	<span class="text-2xl">$: whoami</span>
	<hr class="mb-12" />
	<pre class="max-sm:hidden">
 _____                     _         
|  ___| __ __ _ _ __   ___(_)___ ___ 
| |_ | '__/ _` | '_ \ / __| / __/ __|
|  _|| | | (_| | | | | (__| \__ \__ \
|_|  |_|  \__,_|_| |_|\___|_|___/___/
  </pre>
	<span class="hidden text-4xl max-sm:flex">Franciss</span>
	<p class="inline">
		I turn complex code into something simple and clear. I mostly work with Svelte and Next.js, but
		I also enjoy exploring — from running a homelab and customizing Hyprland on Arch, to tweaking my
		old PSP because I love handheld consoles.
		<span class={`animate-blink ml-1 inline-block h-5 w-2 ${darkMode ? 'bg-light' : 'bg-dark'}`}
		></span>
	</p>
</section>

<style>
	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
	.animate-blink {
		animation: blink 1s steps(1) infinite;
	}
</style>
