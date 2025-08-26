import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// components
export { default as Navbar } from './components/Navbar.svelte';
export { default as Home } from './components/Home.svelte';
export { default as Techstack } from './components/Techstack.svelte';
export { default as Projects } from './components/Projects.svelte';
export { default as Footer } from './components/Footer.svelte';

// dark mode store
export const darkMode = writable(false);

if (browser) {
	const media = window.matchMedia('(prefers-color-scheme: dark)');
	darkMode.set(media.matches);

	media.addEventListener('change', (e) => {
		darkMode.set(e.matches);
	});
}

// optional utility (if you want manual toggling)
export const toggleMode = () => {
	darkMode.update((m) => !m);
};
