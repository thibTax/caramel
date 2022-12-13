import React, {
  Component,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import CoverageForm from "./coverage-form";
import VehiculeForm from "./vehicule-form";
import PersonalForm from "./personnal-form";

function CarForm(props: any) {
  const [stepper, setStep] = useState(0);
  const [buttonText, setButtonText] = useState("Suivant");
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (stepper > 2) {
      closeModal();
    } else if (stepper < 0) {
      closeModal();
    }
  });

  function selectForm() {
    <h1>{stepper}</h1>;
    /* switch (stepper) {
      case 0:
        return <PersonalForm />;
      case 1:
        return <VehiculeForm />;
      case 2:
        return <CoverageForm />;

      default:
        return <div>hey</div>;
    } */
  }
  function handleButton(count: number) {
    changeCountStepper(count);
    changeTextStepper();
  }

  function changeCountStepper(count: number) {
    setStep(stepper + count);
  }

  function changeTextStepper() {
    if (stepper > 0) {
      setButtonText("Envoyer");
    } else {
      setButtonText("Suivant");
    }
  }

  const closeModal = () => {
    props.handleClick();
  };

  const steps = ["ID", "VEHICULE", "ASSURANCE"];
  return (
    <form
      id="login"
      onSubmit={(e) => handleSubmit(e)}
      className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded top-0 overflow-x-hidden overflow-y-auto"
    >
      {/* <!-- component --> */}
      <div className="p-5">
        <div className="mx-auto p-4">
          <div className="flex items-center justify-around ">
            {steps?.map((step, i) => (
              <>
                {stepper === i || stepper > i ? (
                  <div>
                    {stepper > i ? (
                      <div
                        className="flex items-center text-green-400 relative font-bold text-center"
                        key={i}
                      >
                        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  border-green-400 ">
                          {i + 1}
                        </div>
                        <div className="absolute top-0 -ml-10 mt-16 w-32 text-xs uppercase">
                          {step}
                        </div>
                      </div>
                    ) : (
                      <div
                        className="flex items-center text-blue-400 relative font-bold text-center"
                        key={i}
                      >
                        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  border-blue-400 ">
                          {i + 1}
                        </div>
                        <div className="absolute top-0 -ml-10 mt-16 w-32 text-xs uppercase">
                          {step}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className={
                      "flex items-center text-gray-500 relative text-center"
                    }
                  >
                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  border-gray-100 ">
                      {i + 1}
                    </div>
                    <div className="absolute top-0 -ml-10 mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                      {step}
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="mt-8 p-4">
          <>
            {/* call component from stepper click */}
            {stepper === 0 ? (
              <PersonalForm />
            ) : stepper == 1 ? (
              <VehiculeForm />
            ) : (
              <CoverageForm />
            )}
          </>
          <div className="flex p-2 mt-4">
            <button
              onClick={() => handleButton(-1)}
              className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        border-Primary
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition"
            >
              Previous
            </button>
            <div className="flex-auto flex flex-row-reverse">
              <button
                onClick={() => handleButton(1)}
                className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                
        hover:bg-Primary
        bg-Primary 
        text-gray-100 
        border duration-200 ease-in-out 
        border-gray-100 transition"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CarForm;
/*<h1>test</h1>
        <div classNameName="container mx-auto bg-white dark:bg-gray-800 rounded px-4">
          <div classNameName="xl:w-full border-b border-gray-300 dark:border-gray-700 ">
            <div classNameName="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p classNameName="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Personal Information
              </p>
            </div>
          </div>
          
              
                
            
             
              
            </div>
          </div>
        </div>
        <div classNameName="container mx-auto mt-10 rounded bg-gray-100 dark:bg-gray-700 w-11/12 xl:w-full">
          <div classNameName="xl:w-full py-5 px-8">
            <div classNameName="flex items-center mx-auto">
              <div classNameName="container mx-auto">
                <div classNameName="mx-auto xl:w-full">
                  <p classNameName="text-lg text-gray-800 dark:text-gray-100 font-bold">
                    Alerts
                  </p>
                  <p classNameName="text-sm text-gray-500 dark:text-gray-400 pt-1">
                    Get updates of any new activity or features. Turn on/off
                    your preferences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div classNameName="container mx-auto w-11/12 xl:w-full">
          <div classNameName="w-full py-4 sm:px-2 bg-white dark:bg-gray-800 flex justify-end">
            <button
              classNameName="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4"
              onClick={props.handleClick}
            >
              Cancel
            </button>
            <button
              classNameName="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
              type="submit"
              onClick={props.handleClick}
            >
              Save
            </button>
          </div>
        </div>*/
