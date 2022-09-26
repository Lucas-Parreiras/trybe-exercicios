const ang1 = 45;
      ang2 = 45;
      ang3 = 90;

function angulos(ang1, ang2, ang3) {
    if(ang1 + ang2 + ang3 === 180) {
        console.log("True");
    }
    else if(ang1 < 0 || ang2 < 0 || ang3 < 0) {
        console.log("Angulo Inválido!");
    }
    else {
        console.log("False");
    }
}
angulos(ang1, ang2, ang3);

// Tudo certo!