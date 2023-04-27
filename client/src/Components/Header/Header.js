import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/cyf_brand .png";
import { FaBars } from "react-icons/fa";


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
			<button>
				<FaBars />
			</button>
		</nav>
	);
};
export default Header;
