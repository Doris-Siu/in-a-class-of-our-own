import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
		<nav>
			<div>
				<img src="../../Assets/cyf_brand .png" alt="logo" />
			</div>
			<div className="nav-center">
				<ul className={"links"}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
					<button></button>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Header;