<script lang="ts">
	import { Home, Techstack, Projects, darkMode } from '$lib';
	import { projects, techstack } from '$lib/data';
</script>

<Home darkMode={$darkMode} />
<Techstack {techstack} />
<Projects />
