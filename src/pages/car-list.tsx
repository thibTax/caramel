import React, { FunctionComponent, useState, useEffect } from "react";
import CarCard from "../components/car-card";
import Vehicules from "../model/vehicules";
import { VEHICULES } from "../model/mock-vehicule";
import CarForm from "../components/car-form";

const CarList: FunctionComponent = () => {
  const [vehicules, setVehicules] = useState<Vehicules[]>([]);
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    setVehicules(VEHICULES);
  });

  const handleClick = () => {
    setModal(false);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold ml-2 mt-2 tracking-wide ">Voiture</h1>
        <div className="flex flex-wrap items-center justify-center md:justify-start">
          {vehicules.map((vehicule) => (
            <>
              {vehicule.vehicule === "voiture" ? (
                <CarCard key={vehicule.id} vehicule={vehicule} />
              ) : null}
            </>
          ))}
          <div className="text-xs flex flex-col justify-center items-center ml-4 my-8">
            <button
              onClick={() => {
                setModal(true);
              }}
              className="bg-Primary h-12 w-12 rounded-lg flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="white"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
            Ajouter un véhicule
          </div>
        </div>
        <h1 className="text-3xl font-bold ml-2 mt-2 tracking-wide ">Moto</h1>
        <div className="flex flex-wrap justify-center md:justify-start">
          {vehicules.map((vehicule) => (
            <>
              {vehicule.vehicule === "moto" ? (
                <CarCard key={vehicule.id} vehicule={vehicule} />
              ) : null}
            </>
          ))}
          <div className="text-xs flex flex-col justify-center items-center ml-4 my-8">
            <button
              onClick={() => setModal(true)}
              className="bg-Primary h-12 w-12 rounded-lg flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="white"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
            Ajouter un véhicule
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className=" flex-col justify-center items-center flex fixed inset-x-0 top-0 h-full z-50 outline-none focus:outline-none bg-gray-600/75 mx-auto py-4">
            <CarForm handleClick={handleClick} />
          </div>
        </>
      ) : null}
    </>
  );
};
export default CarList;
