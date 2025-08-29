<script lang="ts">
	import { Command, Description } from '$lib';
	import type { AsciiKey } from '$lib/assets/ascii';
	import type { Data } from '$lib/data';
	import Ascii from './Ascii.svelte';

	export let techstack: Data[];
</script>

<section>
	<Command command="cat .config/techstack.txt" />
	<div class="flex flex-col gap-20 max-md:gap-14 max-sm:gap-10">
		{#each techstack as { title, url, logo, details } (title)}
			<div
				class="flex w-full items-center justify-between gap-10 p-3
					   max-md:flex-col max-md:items-center max-md:gap-6
					   max-sm:gap-4 max-sm:p-2"
			>
				<a class="flex items-start gap-3" href={url}>
					<Ascii name={logo as AsciiKey} />
				</a>

				<div class="flex flex-col gap-3 text-left max-md:text-start max-sm:gap-2 max-sm:text-sm">
					<span class="text-xl max-sm:text-lg">{title}</span>
					<Description description={details} />
				</div>
			</div>
		{/each}
	</div>
</section>
