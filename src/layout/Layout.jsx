import { Outlet } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
