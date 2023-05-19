'use strict';


const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelizeDb } = require('../src/models');
const request = supertest(app);


beforeAll(async() => {
  await sequelizeDb.sync();
});


afterAll(async() => {
  await sequelizeDb.drop();
});


describe('Owner route', () => {
  test('create an owner route', async() => {
    let response = await request.post('/owner').send ({
      name: 'Test',
      age: 25,
      location: 'Texas',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Test');
    expect(response.body.age).toEqual(25);
  });


  test('get one owner route', async() => {
    let response = await request.get('/owner/1');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Test');
    expect(response.body[0].age).toEqual(25);
  });


  test('get all owners route', async() => {
    let response = await request.get('/owner');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Test');
    expect(response.body[0].age).toEqual(25);
  });


  test('update owner route', async () => {
    const response = await request.put('/owner/1');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Test');
    expect(response.body.age).toEqual(25);
  });


  test('Delete an owner', async () => {
    const response = await request.get('/owner/1');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Test');
    expect(response.body[0].age).toEqual(25);
  });


});
