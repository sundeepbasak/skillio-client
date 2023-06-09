import { Outlet } from "react-router";
import Footer from "./footer";
import Navbar from "./navbar";

const index = () => {
  return (
    <>
      <div className=" bg-slate-3  p-2 h-full">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default index;
