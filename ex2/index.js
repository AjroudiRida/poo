const Etudiant = require("./etudiant");
const Professeur = require("./professeur");

let personnes = [
    new Etudiant("Doe", "John", 20, "CNE12345"),
    new Etudiant("Smith", "Jane", 22, "CNE67890"),
    new Etudiant("Brown", "Charlie", 19, "CNE54321"),
    new Professeur("Adams", 45, "CNE11223"),
    new Professeur("Baker", 50, "CNE44556")
];

for (let i=0; i < personnes.length-1; i++)
{
    if (personnes[i].nom > personnes[i+1].nom)
    {
        let temp = personnes[i];
        personnes[i] = personnes[i+1];
        personnes[i+1] = temp;
    }
    else if (personnes[i].nom === personnes[i+1].nom)
    {
        if (personnes[i].prenom > personnes[i+1].prenom)
        {
            let temp = personnes[i];
            personnes[i] = personnes[i+1];
            personnes[i+1] = temp;
        }
        else if (personnes[i].prenom === personnes[i+1].prenom)
        {
            if (personnes[i].age > personnes[i+1].age)
            {
                let temp = personnes[i];
                personnes[i] = personnes[i+1];
                personnes[i+1] = temp;
            }
        }   
    }
}

for (let personne of personnes)
{
    console.log(`Nom: ${personne.nom}, Prénom: ${personne.prenom ? personne.prenom : ''}, Age: ${personne.age}, CNE: ${personne.cne}`);
}