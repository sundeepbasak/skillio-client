import React from "react";
import Button from "../../../../form/components/button/Button";
const list = [
  {
    name: "history",
    route: "/history",
  },
  {
    name: "English",
    route: "/english",
  },
  {
    name: "Math",
    route: "/math",
  },
  {
    name: "Science",
    route: "/science",
  },
];

const index = () => {
  const [show, setShow] = React.useState(false);

  console.log(show, "show");
  return (
    <>
      <button
        id="dropdownDelayButton"
        data-dropdown-toggle="dropdownDelay"
        data-dropdown-delay="500"
        data-dropdown-trigger="hover"
        onMouseEnter={() => {
          setShow(true);
        }}
        className="text-black font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-800"
        type="button"
      >
        Categories
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdownDelay"
        onMouseLeave={() => {
          setShow(false);
        }}
        className={`z-10 bg-white divide-y divide-gray-100 ${
          !show ? "hidden" : "block absolute"
        } rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDelayButton"
        >
          {list.map((item) => {
            return (
              <li>
                <a
                  href={item.route}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default index;
