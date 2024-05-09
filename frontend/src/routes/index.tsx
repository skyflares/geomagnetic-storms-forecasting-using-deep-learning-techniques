import Nav from "../components/Nav";
import LogoBar from "../components/LogoBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { pathnames } from "./routes";

export default function Index() {
  const location = useLocation();

  if (!pathnames.includes(location.pathname)) {
    throw new Error("404 Not Found");
  }

  return (
    <>
      <LogoBar />
      <Nav />

      {/* Center the Outlet in the middle of the page using tailwindcss */}
      <div className="flex justify-center px-72">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
