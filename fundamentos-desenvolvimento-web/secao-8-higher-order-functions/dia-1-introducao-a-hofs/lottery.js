const loterySort = (personBet) => {
  let loteryNumber = parseInt(Math.random() * 4) + 1;
  console.log(loteryNumber);
  if (loteryNumber === personBet) {
    return 'Parabéns você ganhou!';
  }
  else {
    return 'Tente novamente.';
  }
};

console.log(loterySort(4));