import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import boxen from 'boxen';
import type { Data } from '$lib/data';
// components
export { default as Navbar } from './components/Navbar.svelte';
export { default as Home } from './components/Home.svelte';
export { default as Techstack } from './components/Techstack.svelte';
export { default as Projects } from './components/Projects.svelte';
export { default as Footer } from './components/Footer.svelte';
export { default as Ascii } from './components/Ascii.svelte';
export { default as Command } from './components/Command.svelte';
export { default as Description } from './components/Description.svelte';

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
export const scrollToHome = (id: string) => {
	return document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

// ascii box
export function projectBox(proj: Data): string {
	const content = [
		`Project: ${proj.title}`,
		proj.details ?? '',
		proj.techStack?.length ? `Tech: ${proj.techStack.join(' | ')}` : '',
		'Links:',
		proj.sourceCode ? `- Source Code: ${proj.sourceCode}` : '',
		proj.liveDemo ? `- Live Demo: ${proj.liveDemo}` : ''
	]
		.filter(Boolean)
		.join('\n');

	return boxen(content, {
		padding: 1,
		margin: 0,
		borderStyle: 'round',
		align: 'left'
	});
}
