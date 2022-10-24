const wakeUp = () => 'Acordando!!';

const haveBreakFast = () => 'Bora tomar café!!';

const goToSleep = () => 'Partiu dormir!!';

const doingThings = (func) => {
  const result = func();
  console.log(result);
};

doingThings(wakeUp);
doingThings(haveBreakFast);
doingThings(goToSleep);