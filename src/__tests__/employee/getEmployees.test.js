const request = require('supertest');
const { app } = require('../../server/app');

describe('PROCESS GET EMPLOYEES', () => {

  let token = null;

  beforeAll( async() => {
    const response = await request(app)
      .post('/v1/login')
      .send({ username: 'pepito', password: 'pepito123'});

    token = response.body.data.token;
  });

  it('All Employees', async () => {
    const response  = await request(app)
      .get('/v1/employee')
      .set('Authorization', `Bearer ${token}`)
      .send({});

    expect(response.body.status).toBe(true);
  });

});