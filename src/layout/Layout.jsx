import { Outlet } from "react-router-dom";
import Navigation from "../components/header/Navigation";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-full  ">
      <Navigation />
      <main className="flex-grow flex justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
