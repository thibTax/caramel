import react, { FunctionComponent } from "react";

const NavBar: FunctionComponent = () => {
  return (
    <nav className="bg-Primary/70 h-20 px-2 sm:px-4 py-2.5 fixed w-full z-40 top-0 left-0 flex justify-between">
      <div className="text-white w-52 text-start self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <h1 className="text-white w-52 text-center self-center text-3xl font-bold">
        My car
      </h1>
      <div className="text-white w-52  text-end self-center flex items-center">
        <a href="../register">
          <span>Inscription</span>
        </a>
        /{" "}
        <a href="../login">
          <span>Connexion</span>
        </a>
        <a href="../login">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-RedText ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
