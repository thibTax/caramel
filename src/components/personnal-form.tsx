function PersonalForm() {
  return (
    <div>
      <div className="xl:w-full border-gray-300 dark:border-gray-700 ">
        <div className="flex flex-col w-11/12 mx-auto xl:w-full xl:mx-0 items-center  text-gray-800 dark:text-gray-100 font-bold">
          <p className="text-lg mt-4">Informations personnelles</p>
        </div>
      </div>
      <div className="mx-4 pt-4 ">
        <div className="container mx-auto">
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="FirstName"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              First Name
            </label>
            <input
              type="text"
              id="FirstName"
              name="firstName"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="firstName"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="LastName"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Last Name
            </label>
            <input
              type="text"
              id="LastName"
              name="lastName"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="Lastname"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Email"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Email
            </label>
            <div className="border border-green-400 shadow-sm rounded flex">
              <div className="px-4 py-3 dark:text-gray-100 flex items-center border-r border-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={5} width={18} height={14} rx={2} />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </div>
              <input
                type="text"
                id="Email"
                name="email"
                required
                className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="flex justify-between items-center pt-1 text-green-400">
              <p className="text-xs">Email Valide</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={16}
                height={16}
              >
                <path
                  className="heroicon-ui"
                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                                    0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                  stroke="currentColor"
                  strokeWidth="0.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="StreetAddress"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Street Address
            </label>
            <input
              type="text"
              id="StreetAddress"
              name="streetAddress"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="street"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="City"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              City
            </label>
            <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex">
              <input
                type="text"
                id="City"
                name="city"
                required
                className="pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 text-gray-500 dark:text-gray-400"
                placeholder="Los Angeles"
              />
              <div className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-up"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 15 12 9 18 15" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-down"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="State/Province"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              State/Province
            </label>
            <input
              type="text"
              id="State/Province"
              name="state"
              required
              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="California"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <label
              htmlFor="Country"
              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
            >
              Country
            </label>
            <input
              type="text"
              id="Country"
              name="country"
              required
              className="border bg-transparent border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="United States"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col mb-6 mx-auto">
            <div className="flex items-center pb-2">
              <label
                htmlFor="ZIP"
                className="text-sm font-bold text-gray-800 dark:text-gray-100"
              >
                ZIP/Postal Code
              </label>
              <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <input
              type="text"
              name="zip"
              required
              id="ZIP"
              className="bg-transparent border border-red-400 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
              placeholder="82737"
            />
            <div className="flex justify-between items-center pt-1 text-red-400">
              <p className="text-xs">Incorrect Zip Code</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x-circle"
              >
                <circle cx={12} cy={12} r={10} />
                <line x1={15} y1={9} x2={9} y2={15} />
                <line x1={9} y1={9} x2={15} y2={15} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PersonalForm;
