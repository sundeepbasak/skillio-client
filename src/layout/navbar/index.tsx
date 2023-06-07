import { Link } from "react-router-dom";
import Logo from "./components/logoContainer/index";
import Searchbar from "./components/searchbar/index";
import Categories from "./components/CategoriesModal/index";

const elements = [
  {
    name: "Learn ",
    link: "/contact",
  },
  {
    name: "Teach on Skillio",
    link: "/courses",
  },
];

const index = () => {
  return (
    <>
      <div className="flex justify-around mx-4 p-4 ">
        <Logo />
        {/* <NavLink to={"/catogorie"}> */}
        <div className=" flex items-center justify-center w-28  ">
          <h1 className="text-l text-center font-bold text-green-900">
            {/* Categories */}
            <Categories />
          </h1>
        </div>
        {/* </NavLink> */}
        <div className=" flex items-center w-4/6 ml-2 ">
          <Searchbar />
        </div>

        <div className=" w-1/6 flex items-center justify-around">
          <Link to={"login"}>
            <h1 className="text-xl font-bold text-green-900">Login</h1>
          </Link>
          <Link to={"signup"}>
            <h1 className="text-xl font-bold text-green-900">Register</h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;
