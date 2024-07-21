const request = require('supertest');
const { app } = require('../../server/app');

describe('PROCESS ADD EMPLOYEE', () => {

  let token = null;
  let employeeId = null;

  beforeAll( async() => {
    const response = await request(app)
      .post('/v1/login')
      .send({ username: 'pepito', password: 'pepito123'});

    token = response.body.data.token;
  });

  it('Add Employee', async () => {
    const response = await request(app)
      .post('/v1/employee')
      .set('Authorization', `Bearer ${token}`)
      .send({ name: "nuevo", lastname:"nuevo", age: 10});

    employeeId = response?.body?.data?.id;
    expect(response.body.status).toBe(true);
  });

  it('get Employee by ID', async () => {
    const response  = await request(app)
      .get(`/v1/employee/${employeeId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({});

    expect(response.body.status).toBe(true);
    expect(response.body.data.id).toBe(employeeId);
  });

});