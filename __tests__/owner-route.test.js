'use strict';


const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);
const { sequelizeDb } = require('../src/models');


beforeAll(async() => {
  await sequelizeDb.sync();
});


afterAll(async() => {
  await sequelizeDb.drop();
});


describe('Owner routes', () => {
  test('create an owner', async() => {
    let response = await request.post('./owner').send ({
      name: 'Test',
      age: 25,
      location: 'Texas',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Test');
    expect(response.body.age).toEqual(25);
  });

  test('gets all owners', async() => {
    let response = await request.get('./owner');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Test');
    expect(response.body[0].age).toEqual(25);
  });
});
