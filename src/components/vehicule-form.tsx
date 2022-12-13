function VehiculeForm() {
  return (
    <div>
      <div className="xl:w-full border-gray-300 dark:border-gray-700 ">
        <div className="flex flex-col w-11/12 mx-auto xl:w-full xl:mx-0 items-center  text-gray-800 dark:text-gray-100 font-bold">
          <p className="text-lg mt-4">Informations véhicule</p>
        </div>
      </div>
      <div className="mx-4 pt-4 ">
        <div className="container mx-auto">
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="name"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Nom du véhicule"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="marque"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Marque
            </label>
            <input
              type="text"
              id="Marque"
              name="Marque"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Marque du véhicule"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="modele"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Modele
            </label>
            <input
              type="text"
              id="Modele"
              name="Modele"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Modele du véhicule"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="annee"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Année
            </label>
            <input
              type="text"
              id="Annee"
              name="Annee"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Année du véhicule"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Energie"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Carburant
            </label>
            <input
              type="text"
              id="Energie"
              name="Energie"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Carburant du véhicule"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="cycle"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Cycle
            </label>
            <input
              type="text"
              id="Cycle"
              name="Cycle"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Cycle du véhicule"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Type"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Type de la partie cycle
            </label>
            <input
              type="text"
              id="Type"
              name="Type"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Type du cycle véhicule"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Disposition"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Disposition de la partie cycle
            </label>
            <input
              type="text"
              id="Disposition"
              name="Disposition"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Disposition du cycle véhicule"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Ouverture"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Ouverture de la partie cycle
            </label>
            <input
              type="text"
              id="Ouverture"
              name="Ouverture"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Ouverture du cycle véhicule"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Cylindree"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Cylindrée
            </label>
            <input
              type="text"
              id="Cylindree"
              name="Cylindree"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Cylindrée du véhicule"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Refroidissement"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Refroidissement
            </label>
            <input
              type="text"
              id="Refroidissement"
              name="Refroidissement"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Refroidissement"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Distribution"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Distribution
            </label>
            <input
              type="text"
              id="Distribution"
              name="Distribution"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Distribution"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Alimentation"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Alimentation
            </label>
            <input
              type="text"
              id="Alimentation"
              name="Alimentation"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Alimentation"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Demarrage"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Démarrage
            </label>
            <input
              type="text"
              id="Demarrage"
              name="Demarrage"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Démarrage"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Puissance"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Puissance
            </label>
            <input
              type="text"
              id="Puissance"
              name="Puissance"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Puissance"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Couple"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Couple
            </label>
            <input
              type="text"
              id="Couple"
              name="Couple"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Couple"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Boite"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Boite
            </label>
            <input
              type="text"
              id="Boite"
              name="Boite"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Boite"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Embrayage"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Embrayage
            </label>
            <input
              type="text"
              id="Embrayage"
              name="Embrayage"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Embrayage"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Transmission"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Transmission
            </label>
            <input
              type="text"
              id="Transmission"
              name="Transmission"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Transmission"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default VehiculeForm;
