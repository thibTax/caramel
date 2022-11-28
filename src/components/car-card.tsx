import { url } from "inspector";
import react, { FunctionComponent } from "react";

const CarCard: FunctionComponent = () => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-md dark:bg-light dark:border-gray-700 m-2">
      <img src="/DUCATI_MONSTER.jpg" className="h-full rounded-lg" alt="Logo" />
      <div className="">
        <a
          href="#"
          className="absolute -mt-8 ml-6 max-w-lg inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-Primary rounded-lg hover:bg-PrimaryHover focus:ring-2 focus:outline-none focus:ring-gray-600 " /* dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 */
        >
          <div className="w-72">
            <h3 className="mb-2 text-2xl font-bold tracking-tight">
              Name of vehixule, 2019
            </h3>
            <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              nombre de kilometre
            </h5>
          </div>

          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
export default CarCard;
