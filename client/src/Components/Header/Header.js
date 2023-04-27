import { NavLink } from "react-router-dom";
import logo from "../../Assets/cyf_brand.png";
import { FaBars, FaGithub } from "react-icons/fa";
import "./Header.css";
import { useState } from "react";

const Header = () => {
	const [showLinks, setShowLinks] = useState(false);
	const [rotate, setRotate] = useState(false);

	function openHiddenLinks() {
		setRotate(!rotate);
		setShowLinks(!showLinks);
	}

	return (
		<nav>
			<div className="nav-container">
				<div>
					<img src={logo} alt="logo" className="nav-logo" />
				</div>
				<ul className="nav-links">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About CYF</NavLink>
					</li>
					<li>
						<NavLink to="/app">Application Info</NavLink>
					</li>
					<li>
						<button>
							Github Login
							<FaGithub />
						</button>
					</li>
				</ul>
				<button
					className={`btn-menu ${rotate ? "rotate" : "return"}`}
					onClick={openHiddenLinks}
				>
					<FaBars />
				</button>
			</div>
			<ul
				className={`nav-links ${
					showLinks ? "show-navlinks" : undefined
				} hidden-navlinks`}
			>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About CYF</NavLink>
				</li>
				<li>
					<NavLink to="/app">Application Info</NavLink>
				</li>
				<li>
					<button>
						Github Login
						<FaGithub />
					</button>
				</li>
			</ul>
		</nav>
	);
};
export default Header;
