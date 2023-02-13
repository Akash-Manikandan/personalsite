import { REDIS_URL } from '$env/static/private';
import { Client, Entity, Schema, Repository } from 'redis-om';
const client = new Client();

async function connect() {
	if (!client.isOpen()) {
		await client.open(REDIS_URL);
	}
}
class Info extends Entity {}
let schema = new Schema(
	Info,
	{
		id: { type: 'number', sortable: true },
		title: { type: 'string' },
		content: { type: 'string[]' }
	},
	{
		dataStructure: 'JSON'
	}
);
class LangStatus extends Entity {}
let lanstatusschema = new Schema(
	LangStatus,
	{
		id: { type: 'number', sortable: true },
		name: { type: 'string' },
		percent: { type: 'number' },
		lang: { type: 'string' }
	},
	{
		dataStructure: 'JSON'
	}
);

class WorksLinks extends Entity {}
let workslinksschema = new Schema(
	WorksLinks,
	{
		id: { type: 'number', sortable: true },
		name: { type: 'string' },
		deployment: { type: 'string' },
		github: { type: 'string' },
		description: { type: 'string' },
		image: { type: 'string' }
	},
	{
		dataStructure: 'JSON'
	}
);
export async function createInfo() {
	await connect();
	const repo = client.fetchRepository(schema);
	const info = repo.createEntity({
		id: 3,
		title: 'Programming Languages Known',
		content: ['C', 'C++', 'JavaScript', 'TypeScript', 'Python', 'Rust', 'SQL']
	});
	const id = repo.save(info);
	return id;
}
export async function createLangInfo() {
	await connect();
	const repo = client.fetchRepository(lanstatusschema);
	const info = repo.createEntity({
		id: 4,
		name: 'Python',
		percent: 50
	});

	const id = repo.save(info);
	return id;
}
export async function createWorks() {
	await connect();
	const repo = client.fetchRepository(workslinksschema);
	const info = repo.createEntity(
		{
			id: 8,
			name: 'Personal Site',
			deployment: 'personalsite-five-sigma.vercel.app',
			github: 'https://github.com/Akash-Manikandan/personalsite',
			description: `A portfolio website built with Sveltekit, Tailwind CSS and using Redis as the database for content management would be a modern and efficient platform for showcasing personal or professional achievements and projects. 
					The portfolio website built with Sveltekit and Redis would offer a simple and intuitive platform for managing and showcasing personal or professional projects, experiences, and skills. Which could easily add and edit content, 
					manage images and media, and customize the layout and style of the website.`,
			image: '/works/personal-site.png'
		}
	);

	const id = repo.save(info);
	return id;
}
export async function createIndex() {
	const repo = client.fetchRepository(schema);
	await repo.createIndex();
}
export async function createIndex1() {
	const repo = client.fetchRepository(lanstatusschema);
	await repo.createIndex();
}
export async function createIndex2() {
	const repo = client.fetchRepository(workslinksschema);
	await repo.createIndex();
}
export async function getInfo() {
	await connect();
	const repo = client.fetchRepository(schema);
	const info = await repo.search().sortAsc('id').returnAll();

	return info;
}
export async function getLangStatus() {
	await connect();
	const repo = client.fetchRepository(lanstatusschema);
	const info = await repo.search().sortAsc('id').returnAll();

	return info;
}

export async function getWorkLinks() {
	await connect();
	const repo = client.fetchRepository(workslinksschema);
	const info = await repo.search().sortAsc('id').returnAll();

	return info;
}