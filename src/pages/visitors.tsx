import { FunctionComponent } from "react";

const Visitors: FunctionComponent = () => {
  return (
    <div>
      <div>
        {/* Caroussel */}
        <img src="./car1.jpg" alt="voiture caroussel" />
      </div>
      <div className="mx-48">
        <div>
          {/* explication  */}
          <h1>En route</h1>
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <p className="col-span-2">
              Le suivi de votre voiture n'aura jamais été aussi simple avec
              l'application My car, vous aurez accès à une multitude de services
              !
            </p>
            <img
              className="row-span-2 col-span-2"
              src="./assurance.jpg"
              alt="assurance"
            />
            <img className="row-span-3" src="" alt="" />
          </div>
        </div>
        <div>
          <h1>Un service qui roule</h1>
          <img src="" alt="" />
        </div>
        <h1 className="mt-10 mb-4">L'univers My car</h1>
        <div className="grid grid-cols-4 mb-10">
          {/* L'univers My car */}

          <button className="relative grid">
            <h1 className="absolute place-self-center pt-4 text-xl  border-8 w-4/5 h-24 bg-gray-200/80 font-bold text-RedText z-20 ">
              Vente et Achat
            </h1>
            <img
              className="object-cover h-full hover:scale-105 hover:z-10"
              src="./vente.jpg"
              alt="vente"
            />
          </button>
          <button className="relative grid">
            <h1 className="absolute place-self-center pt-4 text-xl  border-8 w-4/5 h-24 bg-gray-200/80 font-bold text-RedText z-20 ">
              Entretiens et Réparations
            </h1>
            <img
              className=" object-cover h-full hover:scale-105 hover:z-10"
              src="./entretien.jpg"
              alt="entretien"
            />
          </button>
          <button className="relative grid">
            <h1 className="absolute place-self-center pt-4 text-xl  border-8 w-4/5 h-24 bg-gray-200/80 font-bold text-RedText z-20 ">
              Accidents et Assurance
            </h1>
            <img
              className="object-cover h-full hover:scale-105 hover:z-10"
              src="./assurance1.jpg"
              alt="assurance"
            />
          </button>
          <button className="relative grid">
            <h1 className="absolute place-self-center pt-4 text-xl  border-8 w-4/5 h-24 bg-gray-200/80 font-bold text-RedText z-20">
              Fiche technique
            </h1>
            <img
              className=" object-cover h-full hover:scale-105 hover:z-10"
              src="./fichetech.jpg"
              alt="fiche technique"
            />
          </button>
        </div>
        <footer>{/* retrouver les pages */}</footer>
      </div>
    </div>
  );
};
export default Visitors;
