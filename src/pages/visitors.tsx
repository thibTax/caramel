import { FunctionComponent, useEffect, useState } from "react";
import { IMG } from "../model/mock-img";
import Img from "../model/img";

const Visitors: FunctionComponent = () => {
  const [Imgs, setImg] = useState<Img[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setImg(IMG);
  }, []);

  function next() {
    Imgs.length - 1 > count ? setCount(count + 1) : setCount(0);
  }
  function prev() {
    count === 0 ? setCount(Imgs.length - 1) : setCount(count - 1);
  }
  console.log(Imgs[count].src);
  return (
    <div>
      <div className="text-RedText group ">
        {/* Caroussel */}
        <div
          id="indicators-carousel"
          className="relative"
          data-carousel="slide"
        >
          {/* <!-- Carousel wrapper --> */}
          <div className="relative min-h-screen overflow-hidden rounded-lg ">
            {Imgs[count].id === count ? (
              <div
                className="duration-700 ease-in-out"
                data-carousel-item="active"
              >
                <img
                  src={Imgs[count].src}
                  className="absolute block w-full  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                  alt="..."
                />
              </div>
            ) : null}
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            onClick={prev}
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-RedText/30  group-hover:bg-RedText/50 dark:group-hover:bg-RedText/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-RedText/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            onClick={next}
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-RedText/30  group-hover:bg-RedText/50 dark:group-hover:bg-RedText/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-RedText/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-20 h-20 group-hover:animate-bounce mx-auto -mt-8 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="mx-48">
        <div>
          {/* explication  */}
          <h1 className="font-bold font-montserrat text-3xl mt-10 mb-4">
            En route
          </h1>
          <div className="flex justify-between gap-4 mb-5">
            <article className="w-1/2 flex flex-col justify-between">
              <p className="indent-8 text-justify">
                Le suivi de votre voiture n'aura jamais été aussi simple avec
                l'application <strong>My car</strong>, vous aurez accès à une
                multitude de services ! <br />
                Inscrivez-vous, organisez et découvrez tout sur votre voiture,
                moto, camion ou bus. Restez connecté via votre téléphone ou
                votre tablette. Nous voulons le meilleur pour votre véhicule et
                surtout pour vous.
              </p>
              <img
                src="./motor.jpg"
                alt="motor"
                className="object-top object-cover w-full h-2/3"
              />
            </article>
            <img
              className="object-cover w-1/2"
              src="./assurance.jpg"
              alt="assurance"
            />
            {/* <img className=" " src="" alt="" /> */}
          </div>
        </div>
        <h1 className="font-bold font-montserrat text-3xl mt-10 mb-4">
          Un service qui roule
        </h1>
        <aside className="bg-RedText/5 py-2">
          <h2 className="text-center text-lg">
            My car est l'outil idéal pour vous soucieux de la préservation et de
            la gestion des coûts de votre véhicule.
          </h2>
          <div className="grid grid-cols-2 justify-items-center text-center ">
            <div className="w-3/5 my-10">
              <div className="rounded-full border-2 border-RedText h-20 w-20 mx-auto text-RedText">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="feather feather-currency-euro scale-75"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="my-4 text-xl font-semibold">
                Contrôlez vos dépenses
              </h2>
              <p>
                Enregistrez toutes les fournitures, dépenses, revenus et
                services de votre véhicule.
              </p>
            </div>
            <div className="w-3/5 my-10">
              <div className="rounded-full border-2 border-RedText h-20 w-20 mx-auto text-RedText">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="feather feather-clock scale-75"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="my-4 text-xl font-semibold">Être rappelé</h2>
              <p>
                Planifiez des rappels et nous ne vous laisserons pas oublier
                l'entretien et les paiements.
              </p>
            </div>
            <div className="w-3/5 my-10">
              <div className="rounded-full border-2 border-RedText h-20 w-20 mx-auto text-RedText">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="feather feather-chart-pie scale-75"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>
              </div>
              <h2 className="my-4 text-xl font-semibold">Trouver</h2>
              <p>
                Suivez les performances de vos véhicules grâce à une
                chronologie, des rapports récapitulatifs et des graphiques.
              </p>
            </div>
            <div className="w-3/5 my-10">
              <div className="rounded-full border-2 border-RedText h-20 w-20 mx-auto text-RedText">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="feather feather-wallet scale-75"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                  />
                </svg>
              </div>
              <h2 className="my-4 text-xl font-semibold">
                Économisez de l'argent !
              </h2>
              <p>
                En utilisant Drivvo, vous serez sur la bonne voie pour faire les
                meilleurs choix.
              </p>
            </div>
          </div>
        </aside>
        <h1 className="font-bold font-montserrat text-3xl mt-10 mb-4">
          L'univers My car
        </h1>
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
