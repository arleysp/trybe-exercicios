const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const manyPoints = (soluctions, answers) => {
    let points = 0;
    answers.forEach((element, index) => {
      if (element === soluctions[index]) {
        points += 1;
      } else if (element === 'N.A') {

      } else {
        points -= 0.5;
      }
    });
    return points;
}

const correction = (soluctions, answers, points) => {
  return points(soluctions, answers);
}

console.log(correction(RIGHT_ANSWERS, STUDENT_ANSWERS, manyPoints));