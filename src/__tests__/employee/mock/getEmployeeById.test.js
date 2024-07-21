
const { getById } = require('../../../api/employee/services/getById.js');
const { getEmployeeByIdRepo } = require('../../../api/employee/repositories/getEmployeeById.js');

jest.mock('../../../api/employee/repositories/getEmployeeById.js');

describe('MOCK GET EMPLOYEE', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('get employee 1', async () => {

    getEmployeeByIdRepo.mockResolvedValue({
      id: 1,
      name: "Oscar",
      lastname: "Bernaola"
    });

    const employee = await getById(1);

    expect(employee).toEqual({
      id: 1,
      name: "Oscar",
      lastname: "Bernaola"
    });

    expect(getEmployeeByIdRepo).toHaveBeenCalledWith(1);
  });

})