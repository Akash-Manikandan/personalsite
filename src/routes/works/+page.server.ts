import { getWorkLinks } from '../lib/server/database';
import type { PageServerLoad } from './$types';
type WorksLinks = {
	id: number;
	name: string;
	deployment: string;
	github: string;
	description: string;
	image: string;
};
export const load = (async ({ fetch, params }) => {
	const info: WorksLinks[] = JSON.parse(JSON.stringify(await getWorkLinks()));

	return {
		info: info
	};
}) satisfies PageServerLoad;
