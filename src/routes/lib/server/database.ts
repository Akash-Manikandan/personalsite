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
export async function createIndex() {
	const repo = client.fetchRepository(schema);
	await repo.createIndex();
}
export async function createIndex1() {
	const repo = client.fetchRepository(lanstatusschema);
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
