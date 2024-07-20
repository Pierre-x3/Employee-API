const employeeAdapter = (data) => {
  return { name: data.name, lastname: data.lastname, id: data.id };
} 

const employeeAdapterAll = (data) => {
  return data.map(e => employeeAdapter(e));
}

module.exports = { 
  employeeAdapter, 
  employeeAdapterAll 
};