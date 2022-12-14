export default class Imgs {
    // 1. Typage des propiétés d'un vehicule.
    id:number;
    src: string;
    
     
    // 2. Définition des valeurs par défaut des propriétés d'un vehicule.
    constructor(
     id: number,
     src: string="",
     
    ) {
     // 3. Initialisation des propiétés d'un vehicule.
    
    this.id=id;
    this.src=src;
    
    }
   }