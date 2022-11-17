//EXERCICE 1
let age = 30;
//on va utiliser la condition if
if (age > 18) {
    console.log("Vous êtes majeur")
} else {
    console.log("Vous êtes mineur")

}

//EXERCICE 2

let num = 14;
if (num % 2 == 0) {
    console.log("Le nombre est pair");
} else {
    console.log("Le nombre est impair");
}

//EXERCICE 3

let mark = 5;
if (mark <= 3) {
    console.log("Mauvais");
} else if (mark <= 5) {
    console.log("Moyen");
} else if (mark <= 7) {
    console.log("Assez bien");
} else if (mark <= 9) {
    console.log("Bien");
} else if (mark = 10) {
    console.log("Excellent");
}

//EXERCICE4

let day = 4;
switch (day) {
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    case 4:
        console.log("Jeudi");
        break;
    case 5:
        console.log("Vendredi");
        break;
    case 6:
        console.log("Samedi");
        break;
    case 7:
        console.log("Dimanche");
}

//EXERCICE 5

let value = 'expression';
valuee = typeof (value);
console.log("le type de value est " + valuee);
