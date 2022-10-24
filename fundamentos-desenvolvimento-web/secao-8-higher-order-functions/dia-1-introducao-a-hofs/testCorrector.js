const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  }
  if (studentAnswers === 'N.A') {
    return 0;
  }
  return -0.5;
};

const testCorrector = (rightAnswers, studentAnswers, comparer) => {
  let grade = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    const returnGrade = comparer(rightAnswers[i], studentAnswers[i]);
    grade += returnGrade;
  }
  return `Sua nota final é: ${grade} pontos.`;
};

console.log(testCorrector(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));