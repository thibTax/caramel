import react, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import CarDetails from "../pages/car-details";
type props = {
  assureur: string;
  id: number;
  img: string;
  marque: string;
  modele: string;
  annee: number;
  km: number;
};
function CarCard(props: props) {
  return (
    <div className="relative max-w-xs shadow-md m-8 rounded-lg border border-gray-200">
      <div className="   rounded-lg overflow-hidden ">
        <div className=" bg-black ">
          <img
            src={props.img}
            className="max-h-full h-48 max-w-full w-72 object-fill"
            alt="Logo"
          />
        </div>
        <button
          className="rounded-lg bg-Primary w-full -mt-8 ml-4 absolute capitalize focus:ring-2 focus:outline-none focus:ring-gray-600"
          onClick={() => (
            <CarDetails
              img={props.img}
              marque={props.marque}
              modele={props.modele}
              annee={props.annee}
              km={props.km}
              assureur={props.assureur}
            />
          )}
        >
          <div className="truncate text-xl font-semibold text-white tracking-wide">
            <span>{props.modele}</span> &bull;
            <span> {props.annee}</span>
          </div>
          <h1 className="flex items-center justify-between ml-4 mr-4 mb-2 text-sm font-semibold italic text-gray-500">
            {props.km} km
            <span className="text-inline">
              <svg
                aria-hidden="true"
                className="w-4 h-4 "
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </h1>
        </button>
      </div>
    </div>
  );
}
export default CarCard;
