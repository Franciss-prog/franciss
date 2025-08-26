import type { Component } from 'svelte';
import Ts from './assets/ascii/Ts.svelte';
import Go from './assets/ascii/Go.svelte';
import Python from './assets/ascii/Python.svelte';
import Cpp from './assets/ascii/Cpp.svelte';
import Lua from './assets/ascii/Lua.svelte';
import Bash from './assets/ascii/Bash.svelte';
import Linux from './assets/ascii/Linux.svelte';
import PostgreSQL from './assets/ascii/PostgreSQL.svelte';
import MongoDB from './assets/ascii/MongoDB.svelte';
import Git from './assets/ascii/Git.svelte';
import Vercel from './assets/ascii/Vercel.svelte';

export interface Data {
	id: number;
	title: string; // used by both projects + techstack
	details: string;
	techStack?: string[];
	sourceCode?: string;
	liveDemo?: string;
	logo?: Component;
	url?: string;
}

export const projects: Data[] = [
	{
		id: 1,
		title: 'CoinKeeper',
		details: 'A front-end application to monitor expenses with charts and a clean UI.',
		techStack: ['Next.js', 'TailwindCSS', 'shadcn/ui', 'Verc'],
		sourceCode: 'https://github.com/Franciss-prog/coinkeeper',
		liveDemo: 'https://coinkeeper.vercel.app'
	},
	{
		id: 2,
		title: 'Listify',
		details:
			'A simple to-do list application with user authentication and database support, designed to keep tasks organized and accessible anywhere.',
		techStack: ['NextJS', 'TailwindCSS', 'MongoDB', 'Vercel'],
		liveDemo: 'https://listify.vercel.app'
	}
];

export const techstack: Data[] = [
	{
		id: 1,
		title: 'TypeScript',
		logo: Ts,
		details:
			'My primary language for modern web apps. I use it with Vue for personal projects. Strong typing keeps code reliable and maintainable.',
		url: 'https://www.typescriptlang.org/'
	},
	{
		id: 2,
		title: 'Go',
		logo: Go,
		details:
			'I use Go to build lightweight, high-performance backend APIs and services. Great for efficiency and simplicity, especially when paired with PostgreSQL or MongoDB.',
		url: 'https://go.dev/'
	},
	{
		id: 3,
		title: 'Python',
		logo: Python,
		details:
			'Mainly for academic work, scripting, and experiments. I use it for data processing and school projects, where libraries like NumPy or Pandas are useful.',
		url: 'https://www.python.org/'
	},
	{
		id: 4,
		title: 'C++',
		logo: Cpp,
		details:
			'Primarily for school and algorithm-heavy coursework. Helps me think about efficiency and low-level details compared to higher-level languages.',
		url: 'https://isocpp.org/'
	},
	{
		id: 5,
		title: 'Lua',
		logo: Lua,
		details:
			'Lightweight scripting for customization and automation. I mainly use it in my Neovim setup and sometimes for game configs.',
		url: 'https://www.lua.org/'
	},
	{
		id: 6,
		title: 'Bash',
		logo: Bash,
		details:
			'For automation scripts and system tasks. I use it to automate Linux workflows like server setup and dotfile management.',
		url: 'https://www.gnu.org/software/bash/'
	},
	{
		id: 7,
		title: 'PostgreSQL',
		logo: PostgreSQL,
		details:
			'My go-to relational database for structured apps. Strong querying capabilities, often used alongside Go backends.',
		url: 'https://www.postgresql.org/'
	},
	{
		id: 8,
		title: 'MongoDB',
		logo: MongoDB,
		details:
			'Best for flexible schemas and quick prototyping. Works well with web apps where JSON-like storage feels natural.',
		url: 'https://www.mongodb.com/'
	},
	{
		id: 9,
		title: 'Linux',
		logo: Linux,
		details:
			'My go-to OS for development and server deployments. I use Arch Linux as my daily driver for full control of my dev environment, and Debian for stable server hosting and backend work. Highly customizable and reliable for various workflows.',
		url: 'https://www.kernel.org/'
	},
	{
		id: 10,
		title: 'Git',
		logo: Git,
		details:
			'Version control for both hobby projects and professional work. Keeps track of changes, iterations, and helps with collaboration.',
		url: 'https://git-scm.com/'
	},
	{
		id: 11,
		title: 'Vercel',
		logo: Vercel,
		details:
			'Hosting for my Svelte, NextJS and Vue apps. Seamless Git integration and fast deployments make it my default choice.',
		url: 'https://vercel.com/'
	}
];
