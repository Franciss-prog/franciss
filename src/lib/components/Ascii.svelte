<script lang="ts">
	import { ascii } from '$lib/assets/ascii';
	import type { AsciiKey } from '$lib/assets/ascii';
	export let name: AsciiKey;
</script>

<pre class="text-[16px] leading-none max-md:text-[12px] max-sm:text-[8px]">
  {ascii[name as AsciiKey] ?? name} <!-- fallback: if ascii doesn’t exist, show the name -->
</pre>
