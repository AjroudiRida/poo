class Voiture {
    constructor(model, marque, annee, type, carburant) {    
        this.model = model;
        this.marque = marque;
        this.annee = annee;
        this.type = type;
        this.carburant = carburant;
    }

    afficher() {
        console.log(`Modèle: ${this.model}, Marque: ${this.marque}, Année: ${this.annee}, Type: ${this.type}, Carburant: ${this.carburant}`);
    }
}

module.exports = Voiture;