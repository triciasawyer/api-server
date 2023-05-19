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


describe('Pet route', () => {
  test('create a pet', async() => {
    let response = await request.post('./pet').send ({
      name: 'Test',
      age: 6,
      type: 'dog',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Test');
    expect(response.body.age).toEqual(6);
  });


  test('get one pet route', async() => {
    let response = await request.get('./pet/1');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Test');
    expect(response.body[0].age).toEqual(6);
  });


  test('gets all pets', async() => {
    let response = await request.get('./pet');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Test');
    expect(response.body[0].age).toEqual(6);
  });

  
  test('update pet route', async () => {
    const response = await request.put('/pet/1').send({ name: 'Test' });
    // console.log(response.body);
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Test');
    expect(response.body[0].age).toEqual(6);
  });
});
