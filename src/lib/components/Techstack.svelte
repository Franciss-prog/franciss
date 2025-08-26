<script lang="ts">
	import type { Data } from '$lib/data';

	export let techstack: Data[];
</script>

<section>
	<span class="text-2xl">$: cat .config/techstack</span>
	<hr class="mb-10" />
	<div class="flex flex-col gap-20">
		{#each techstack as { title, url, logo, details } (title)}
			<div class="flex w-full items-center justify-between gap-10 p-3 max-md:flex-col max-md:gap-5">
				<a class="flex flex-col items-start gap-3" href={url}>
					<svelte:component this={logo} />
				</a>
				<div class="flex flex-col gap-3">
					<span class="text-xl">{title}</span>
					<p class="text-justify">{details}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
