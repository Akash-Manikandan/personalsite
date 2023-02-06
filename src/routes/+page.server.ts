import type { PageServerLoad } from './$types';
import { getInfo, getLangStatus } from './lib/server/database';
type Info = {
	id: number;
	title: string;
	content: string[];
};
type LangStatus = {
	id: number;
	name: string;
	percent: number;
	lang: string;
};
export const load = (async ({ fetch, params }) => {
	const info: Info[] = JSON.parse(JSON.stringify(await getInfo()));
	const langstatus: LangStatus[] = JSON.parse(JSON.stringify(await getLangStatus()));
	return {
		post: info,
		status: langstatus
	};
}) satisfies PageServerLoad;
