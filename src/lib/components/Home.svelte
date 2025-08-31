<script lang="ts">
	import { Command } from '$lib';
	export let darkMode;
</script>

<section id="home">
	<Command command=" whoami" />

	<pre class="text-[20px] leading-none max-md:text-[12px] max-md:leading-none max-sm:text-[12px]">
       .=(((=.       
      i;'   `:i      
      !_______!      
     ((  /-\  ))     
      !`' V `'!      
       \  -  /       
       !\._./!       
      /.     .\      
 _.-~'  `. .'  `~-._ 
'  \      V      /  `

  </pre>

	<p class="inline items-center">
		My name is Franciss, I turn complex code into something simple and clear. I mostly work with
		Svelte and Next.js, but I also enjoy exploring — from running a homelab and customizing Hyprland
		on Arch, to tweaking my old PSP because I love handheld consoles.
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
