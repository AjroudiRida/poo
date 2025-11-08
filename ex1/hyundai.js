const Voiture = require('./Voiture.js');

class Hyundai extends Voiture {
    constructor(model, marque, annee, type, carburant,serie, hybride)
    {
        super(model, marque, annee, type, carburant);
        this.serie = serie;
        this.hybride = hybride;
    }

    alarmer()
    {

    }

    afficher() {
        super.afficher();
        console.log(`Série: ${this.serie}, Hybride: ${this.hybride}`);
    }
}

module.exports = Hyundai;