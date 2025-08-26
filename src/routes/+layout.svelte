<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/pfp.gif';
	import { darkMode, Navbar, Footer } from '$lib';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Franciss-prog || Portfolio</title>
</svelte:head>

<Navbar />
<main
	class={`flex min-h-screen flex-col gap-10 p-10 ${
		$darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
	}`}
>
	<slot />
</main>
<Footer />
