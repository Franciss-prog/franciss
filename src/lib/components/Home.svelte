<script>
	import { Command } from '$lib';
	export let darkMode;
</script>

<section id="home">
	<Command command=" whoami" />
	<pre class="max-md:leading-[] text-[20px] leading-none max-md:text-[12px] max-sm:text-[12px]">
 _____                     _         
|  ___| __ __ _ _ __   ___(_)___ ___ 
| |_ | '__/ _` | '_ \ / __| / __/ __|
|  _|| | | (_| | | | | (__| \__ \__ \
|_|  |_|  \__,_|_| |_|\___|_|___/___/

  </pre>
	<p class="inline items-center">
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
