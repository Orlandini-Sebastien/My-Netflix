import { ReactElement } from "react";
import logo from "../img/logo.png";

const Header = (): ReactElement => {
	return <img src={logo} className="logo"></img>;
};

export default Header;
