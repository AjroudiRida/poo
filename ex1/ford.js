const Voiture = require('./Voiture.js');
class Ford extends Voiture {
    constructor(model, marque, annee, type, carburant, options = [])
    {
        super(model, marque, annee, type, carburant);
        this.options = options;
    }

    afficher() {
        super.afficher();
        console.log(`Options: ${this.options.join(", ")}`);
    }
}

module.exports = Ford;