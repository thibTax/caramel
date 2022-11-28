import { url } from "inspector";
import react, { FunctionComponent } from "react";

const ForgotPassword: FunctionComponent = () => {
  return (
    /* // <!-- component -->
    <body className="font-mono bg-gray-400">
      {/* <!-- Container --> }
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          {/* <!-- Row --> }
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            {/* <!-- Col --> } */
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
            <img
              src="/Forgot password-pana.png"
              height={"80%"}
              width={"80%"}
              alt="Online illustrations by Storyset"
            />
          </div>
          {/* <!-- Col --> */}
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <div className="px-8 mb-4 text-center">
              <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
            </div>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              {/* <!-- Email input --> */}
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-Primary focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-6 text-center">
                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-Primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-PrimaryHover hover:shadow-lg focus:bg-PrimaryHover focus:shadow-lg focus:outline-none focus:ring-0 active:bg-PrimaryActive active:text-Primary active:shadow-lg transition duration-150 ease-in-out"
                >
                  Reset Password
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <a
                    href="../register/"
                    className="text-Danger hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    Register
                  </a>
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Already have an account?
                  <a
                    className="no-underline border-b border-blue text-Danger"
                    href="../login"
                  >
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
