const Hyundai = require('./Hyundai.js');
const Ford = require('./ford.js');
let hyundai_i20 = new Hyundai("i20", "Hyundai", 2020, "Citadine", "Essence", "Active", true);
let ford_Fiesta = new Ford("Fiesta", "Ford", 2018, "Citadine", "Diesel", ["Bluetooth", "Caméra de recul"]);
let hyundai_SantaFe = new Hyundai("Santa Fe", "Hyundai", 2021, "SUV", "Hybride", "Premium", true);
let voitures = [hyundai_i20, ford_Fiesta, hyundai_SantaFe];


for (let i=0; i < voitures.length-1; i++) {
   
        if (voitures[i].annee > voitures[i+1].annee)
        {
            let temp = voitures[i];
            voitures[i] = voitures[i+1];
            voitures[i+1] = temp;
        }
    
}

for (let voiture of voitures) 
    {
        voiture.afficher();
        console.log("-------------------");
    }