import { Route, Routes } from "react-router-dom";
import Categories from "../../Pages/Categories";
import LandingPage from "../../Pages/LandingPage";
import Product from "../../Pages/Products";
import Showroom from "../../Pages/Showroom";

const Header = props => {
  return (
    <>
      <header className="container">{props.children}</header>
    </>
  );
};

export default Header;
