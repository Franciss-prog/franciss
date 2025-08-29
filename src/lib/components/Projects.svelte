<script lang="ts">
	import { Command } from '$lib';
	import { projects } from '$lib/data';
	import type { Data } from '$lib/data';

	// Utility: create tree-style ASCII
	function renderProjectsTree(projects: Data[]): string {
		let output = 'Projects\n';

		projects.forEach((project, i) => {
			const isLast: boolean = i === projects.length - 1;
			const prefix: string = isLast ? '└── ' : '├── ';

			output += `${prefix}${project.title}\n`;

			const childPrefix: string = isLast ? '    ' : '│   ';

			if (project.details) {
				output += `${childPrefix}├── Details: ${project.details}\n`;
			}
			if (project.techStack && project.techStack.length > 0) {
				output += `${childPrefix}├── TechStack: ${project.techStack.join(', ')}\n`;
			}
			if (project.sourceCode) {
				output += `${childPrefix}├── Source: ${project.sourceCode}\n`;
			}
			if (project.liveDemo) {
				output += `${childPrefix}└── Demo:   ${project.liveDemo}\n`;
			}
		});

		return output;
	}

	const projectsAscii: string = renderProjectsTree(projects);
</script>

<section>
	<Command command="ls -la Projects/" />
	<pre class="text-base">{projectsAscii}</pre>
</section>
