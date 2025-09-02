<script lang="ts">
	import { Command } from '$lib';
	import { projects } from '$lib/data';
	import Description from './Description.svelte';
	export let darkMode;

	// Instead of just the id, store the whole project or null
	let openProject: (typeof projects)[number] | null = null;

	const open = (id: number) => {
		openProject = projects.find((p) => p.id === id) || null;
	};

	const close = () => {
		openProject = null;
	};
</script>

<section>
	<Command command="ls -la Projects/" />

	<div
		class="grid grid-cols-3 justify-between gap-4
max-md:grid-cols-2 max-md:items-center max-md:justify-center max-sm:grid-cols-1"
	>
		{#each projects as { title, id } (id)}
			<button
				class="flex w-fit flex-col items-start gap-2 text-6xl max-md:text-4xl max-sm:text-2xl"
				on:click={() => open(id)}
			>
				{#if openProject?.id === id}
					<i class="bi bi-folder2-open"></i>
				{:else}
					<i class="bi bi-folder2"></i>
				{/if}
				<span class="max-sm:text-md text-xl max-md:text-lg">{title}</span>
			</button>
		{/each}
	</div>
</section>

{#if openProject}
	<!-- Overlay -->
	<div
		class="fixed inset-0 flex items-center justify-center bg-black/50 p-20 max-md:p-10"
		on:click={close}
		on:keydown={(e) => {
			if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') close();
		}}
		role="button"
		tabindex="0"
	>
		<!-- Modal -->
		<div
			class={`w-full rounded-2xl p-6 shadow-xl ${
				darkMode ? 'bg-dark ' : 'bg-light'
			} flex flex-col items-start gap-2`}
		>
			<h2 class="mb-2 text-xl font-bold">{openProject.title}</h2>
			<Description description={openProject.details} />

			<div class="flex items-start gap-2 max-md:grid max-md:grid-cols-2">
				{#each openProject.techStack ?? [] as tech (tech)}
					<Description description={tech} />
				{/each}
			</div>

			<div class="mt-4 flex gap-4">
				{#if openProject?.sourceCode}
					<a href={openProject.sourceCode} target="_blank">Source Code</a>
				{/if}
				{#if openProject?.liveDemo}
					<a href={openProject.liveDemo} target="_blank" class="underline">Live Demo</a>
				{/if}
			</div>
		</div>
	</div>
{/if}
