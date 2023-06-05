const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

  const somaTotalDeEStudantes = (curso) => {
    let valorTotal = 0;
    for (let index = 0; index < curso.lessons.length; index += 1) {
        valorTotal += curso.lessons[index].students;
        
    } return valorTotal;
  }
  console.log(somaTotalDeEStudantes(school))


  const verifyKey = (objt, chavosa) => {
    for (let index = 0; index < objt.lessons.length; index += 1) {
        if (objt.lessons[index][chavosa] === undefined) {
        return false; 
        } else {
        return true;
        }

    } 
}

  console.log(verifyKey(school, 'jaca'))

  const alterarTurno = (base, curso, valor) => {
    for (let index = 0; index < base.length; index += 1) {
        if base[index] === curso {
            base.shift = valor
        }
    }

    }

const alterarTurno('lessons', 'Python', 'Noite');

console.log(school)