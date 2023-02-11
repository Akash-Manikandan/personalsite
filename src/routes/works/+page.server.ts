import type { PageServerLoad } from './$types';
type WorksLinks = {
	id: number;
	name: string;
	deployment: string;
	github: string;
	description: string;
	image: string;
};
export const load = (async ({ fetch, params }) => {}) satisfies PageServerLoad;
