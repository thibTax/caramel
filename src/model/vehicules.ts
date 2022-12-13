export default class Vehicules {
    [x: string]: any;
    // 1. Typage des propiétés d'un vehicule.
    id:number;
    vehicule: string;
    marque: string;
    annee:number;
    modele: string;
    img: string;
    km:number;
    assureur:string;
    Energie	:string;
    Cycle:string;
    Type:string;
    Disposition:string;
    Ouverture:number;
    Cylindree:number;
    Refroidissement:string;
    Distribution:string;
    Alimentation:string;
    Démarrage:string;
    Puissance:string;
    Couple:string;
    Boîte:string;
    Embrayage:string;
    Transmission:string;
     
    // 2. Définition des valeurs par défaut des propriétés d'un vehicule.
    constructor(
     id: number,
     vehicule: string="vehicule type",
     marque: string="marque",
     annee:number=2022,
     modele: string="modele",
     img: string="/img",
     km:number=0,
     assureur:string="assureur name",
     Energie	:string="energie",
     Cycle:string="cycle",
     Type:string="type",
     Disposition:string="disposition",
     Ouverture:number=0,
     Cylindree:number=0,
     Refroidissement:string="refroidissement",
     Distribution:string="distribution",
     Alimentation:string="alimentation",
     Démarrage:string="demarrage",
     Puissance:string="puissance",
     Couple:string="couple",
     Boîte:string="boite",
     Embrayage:string="embrayage",
     Transmission:string="transmission"
    ) {
     // 3. Initialisation des propiétés d'un vehicule.
    
    this.id=id;
    this.vehicule=vehicule;
    this.marque=marque;
    this.annee=annee;
    this.modele=modele;
    this.img=img;
    this.km=km;
    this.assureur=assureur;
    this.Energie=Energie;
    this.Cycle=Cycle;
    this.Type=Type;
    this.Disposition=Disposition;
    this.Ouverture=Ouverture;
    this.Cylindree=Cylindree;
    this.Refroidissement=Refroidissement;
    this.Distribution=Distribution;
    this.Alimentation=Alimentation;
    this.Démarrage=Démarrage;
    this.Puissance=Puissance;
    this.Couple=Couple;
    this.Boîte=Boîte;
    this.Embrayage=Embrayage;
    this.Transmission=Transmission;
    }
   }