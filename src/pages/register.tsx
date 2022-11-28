import react, { FunctionComponent } from "react";

const Register: FunctionComponent = () => {
  return (
    // <!-- component -->
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-Primary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-PrimaryHover hover:shadow-lg focus:bg-PrimaryHover focus:shadow-lg focus:outline-none focus:ring-0 active:bg-PrimaryActive active:text-Primary active:shadow-lg transition duration-150 ease-in-out"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-sm font-semibold mt-2 pt-1 mb-0">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-Danger"
            href="../login"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
};
export default Register;
