const newEmployeeInfo = (nam, lastNam) => {
  return {
    nome: `${nam} ${lastNam}`,
    email: `${nam}_${lastNam}@trybe.com`,
  };
};

const newEmployees = () => {
  const employees = {
    id1: newEmployeeInfo('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newEmployeeInfo('Luiza', 'Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newEmployeeInfo('Carla', 'Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees());
