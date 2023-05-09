import { CDBBox, CDBBtn } from "cdbreact";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<div style={{ width: "100%", backgroundColor: "#231f20" }}>
			<CDBBox
				display="flex"
				justifyContent="between"
				alignItems="center"
				className="mx-auto py-4 flex-wrap"
				style={{ width: "85%" }}
			>
				<div>
					<CDBBox>
						<p className="ms-2 text-white" style={{ fontWeight: "bolder" }}>
							Community{" "}
						</p>
						<a
							className="ms-2 "
							href="https://www.codeyourfuture.io/"
							target="blank"
							style={{ color: "white", paddingTop: "5px" }}
						>
							{" "}
							Website{" "}
						</a>{" "}
						<br />
						<a
							className="ms-2 "
							href="https://docs.codeyourfuture.io/"
							target="blank"
							style={{ color: "white", paddingTop: "5px" }}
						>
							{" "}
							Documentation
						</a>
					</CDBBox>
				</div>
				<CDBBox>
					<medium className="ms-2 text-white">
						Copyright{" "}
						<span
							className="text-danger"
							style={{ fontWeight: "bolder", margin: "1px" }}
						>
							{" "}
							&copy;
						</span>{" "}
						2023 Code Your Future{" "}
					</medium>{" "}
					<br></br>
					<medium className="ms-2 " style={{ color: "white" }}>
						{" "}
						Project Team - In a class of our own{" "}
					</medium>
				</CDBBox>
				<CDBBox display="flex gap-3">
					<CDBBtn
						flat
						color="danger"
						className="p-2"
						href="https://www.facebook.com/codeyourfuture.io"
						target="blank"
						style={{ textDecoration: "none" }}
						aria-label="Facebook"
					>
						<FaFacebook />
					</CDBBtn>
					<CDBBtn
						flat
						color="danger"
						className="p-2"
						href="https://twitter.com/CodeYourFuture"
						target="blank"
						style={{ textDecoration: "none" }}
						aria-label="Twitter"
					>
						<FaTwitter />
					</CDBBtn>
					<CDBBtn
						flat
						color="danger"
						className="p-2"
						href="https://www.instagram.com/codeyourfuture_/"
						target="blank"
						style={{ textDecoration: "none" }}
						aria-label="Instagram"
					>
						<FaInstagram />
					</CDBBtn>
					<CDBBtn
						flat
						color="danger"
						className="p-2"
						href="https://github.com/codeyourfuture/"
						target="blank"
						style={{ textDecoration: "none" }}
						aria-label="Github"
					>
						<FaGithub />
					</CDBBtn>
				</CDBBox>
			</CDBBox>
		</div>
	);
};

export default Footer;
