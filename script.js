console.log("Hello World");

//Première partie
//let motUtilisateur = prompt("Entrez un mot :")
//console.log(motUtilisateur)


//Deuxième partie
// const motApplication = "Bonjour"
// let motUtilisateur = prompt("Entrez le mot : " + motApplication)

// if (motUtilisateur === motApplication) {
//     console.log("Bravo !")
// } else {
//     console.log("Vous avez fait une erreur de frappe.")
// }


//Troisième partie
const listeMots = ["Cachalot", "Pétunia" , "Serviette"];

let score = 0;

let motUtilisateur = prompt("Entrez le mot : " + listeMots[0]);

if (motUtilisateur === listeMots[0]&& motUtilisateur === listeMots[1] && motUtilisateur === listeMots[2]) {
    console.log("Bravo !");
    score++;
} else {
    console.log("Vous avez fait une erreur de frappe.")
}


console.log("Votre score est de : " + score);

