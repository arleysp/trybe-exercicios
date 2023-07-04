const studentRegister = (name, age) => {
    try {
     checkInputs(name, age)
     checkAge(age)
     return `${name}, seja bem-vindo(a) à AuTrybe!`
    } catch(error) {
      return error.message;
    }
  };

const checkInputs = (name, age) => {
    if (name === '' || age === '') {
        throw new Error('Todas as informações são necessárias')
    }
};

const checkAge = (age) => {
    if (age < 18) {
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas')
    }
};

console.log(studentRegister('Arley', ''))
