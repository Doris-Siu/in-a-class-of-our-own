import { Link } from "react-router-dom";
import logo from "../../assets/cyf_brand .png";
import { FaBars } from "react-icons/fa";
import "./Header.css";

const Header = () => {
	return (
		<nav>
			<div>
				<img src={logo} alt="logo" className="nav-logo" />
			</div>
			<ul className="nav-links">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About CYF</Link>
				</li>
				<li>
					<Link to="/app">Application Info</Link>
				</li>
				<li>
					<button>Login With Github</button>
				</li>
			</ul>
			<button className="btn-menu">
				<FaBars />
			</button>
		</nav>
	);
};
export default Header;
