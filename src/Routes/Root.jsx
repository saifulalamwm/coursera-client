import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
