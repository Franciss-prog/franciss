import { projects } from '$lib/data';
import { projectBox } from '$lib';

export const load = async () => {
	return {
		projects: projects.map((p) => ({
			...p,
			box: projectBox(p)
		}))
	};
};
