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
			id: 0,
			name: 'Query Management System',
			deployment: 'https://forum-frontend-steel.vercel.app/',
			github: 'https://github.com/KE2002/forumFrontend',
			description: `A forum page where we have combined the power of Angular, NestJS, and Neo4j to create an exceptional platform for meaningful discussions. 
						  With Angular as our frontend framework, we have crafted a visually appealing and interactive user interface that ensures a seamless browsing experience. 
						  NestJS, our chosen backend framework, provides a robust and scalable foundation for our forum site, allowing us to handle complex business logic, authentication, 
						  and data management with ease. And with Neo4j as our database, we have embraced the flexibility and efficiency of a graph database, enabling us to store and query relationships between forum topics, users, and their interactions. 
						  Together, this tech stack empowers our forum site to offer a dynamic and engaging environment for users to connect, share knowledge, and participate in vibrant discussions.`,
			image: '/works/forum-frontend.png'
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
	const info = await repo.search().sortDesc('id').returnAll();

	return info;
}