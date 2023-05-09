import React from "react";
import "./Banner.css";
import bannerBg from "../../Assets/bannerBg.jpg";

export default function Banner() {
	return (
		<div className="banner-container">
			<div className="banner-text">
				<h1># IN A CLASS OF OUR OWN</h1>
				<h2>
					You can view milestones in just 1 click. <br />
					Get started now!
				</h2>
			</div>
			<img src={bannerBg} alt="bannerBg" className="banner-bg" />
		</div>
	);
}
