<script lang="ts">
	import type { Data } from '$lib/data';
	export let projects: Data[];
	export let darkMode;
</script>

<section>
	<span class="text-2xl">$: ls -la Projects/</span>
	<hr class="mb-10" />
	<div class="flex flex-col gap-10">
		{#each projects as { id, title, details, techStack, sourceCode, liveDemo } (id)}
			<div class="flex flex-col gap-5">
				<span class="text-4xl">{title}</span>
				<p>{details}</p>

				{#if techStack}
					<div class="flex gap-3">
						{#each techStack as i (i)}
							<span class="cursor-pointer underline">{i}</span>
						{/each}
					</div>
				{/if}

				<div class="flex gap-3">
					{#if sourceCode}
						<a href={sourceCode} target="_blank" rel="noopener noreferrer" class="border p-2"
							>Source Code
							<i class="bi bi-github"></i>
						</a>
					{/if}
					{#if liveDemo}
						<a
							href={liveDemo}
							target="_blank"
							rel="noopener noreferrer"
							class={`${darkMode ? 'bg-light text-dark' : 'bg-dark text-light'} p-2`}
							>Live Demo <i class="bi bi-box-arrow-up-right"></i></a
						>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
