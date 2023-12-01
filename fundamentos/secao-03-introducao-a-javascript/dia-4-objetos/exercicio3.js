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
    let findcourse;
    let tamanhoArrei = base.lessons.length
    for (let index = 0; index < tamanhoArrei; index += 1) {
      let element = base.lessons[index];
      if (element.course === curso) {
            findcourse = element;
            break;
        }
    }
    if (findcourse !== undefined) {
      findcourse.shift = valor;
      return findcourse
    } else {
      return 'Curso não encontrado.'
    }
  }

console.log(alterarTurno(school, 'Python', 'Noite'))