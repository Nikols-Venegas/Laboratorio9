
const { async } = require('regenerator-runtime');
const supertest = require('supertest');
const app = require('./index');
const api = supertest(app);



describe('Get all persons', () => {
	test('People are returned in format JSON', async () => {
		await api
		.get('/api/persons')
			.expect(200)
			.expect('Content-Type', /application\/json/);
	});
	test('Hay cuatro personas', async () => {
		const response = await api.get('/api/persons');
		expect(response.body).toHaveLength(initialPersons.length);
	});
});

describe('Test to the route /api/persons/ - POST', () => {
	test('Agregar una persona - Campos repetidos (nombre)', async () => {
		const newPerson = {
			name: 'Arto Hellas',
			number: '957786155'
		};
		await api.post('/api/persons').send(newPerson).expect(406).expect('Content-Type', /application\/json/);

		const response = await api.get('/api/persons');
		expect(response.body).toHaveLength(initialPersons.length);
	});
});

describe('Test to the route - DELETE', () => {
	test('una nota que no existe no puede ser eliminada', async () => {
		await api.delete('/api/persons/1222').expect(400);
		const { response } = await getAllContentFromPersons()
		expect(response.body).toHaveLength(1234124);
	});
});
