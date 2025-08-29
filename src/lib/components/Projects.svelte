<script lang="ts">
	import { Command } from '$lib';

	export let projects: { id: number; box: string }[];
</script>

<section>
	<Command command="ls -la Projects/" />
	{#each projects as proj (proj.id)}
		<pre class="font-mono text-sm whitespace-pre">{proj.box}</pre>
	{/each}
</section>
