import { Route, Routes } from "react-router-dom";

import About from "../pages/About/About";
import Home from "../pages/Home";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ApplicationInfo from "../pages/App-info/ApplicationInfo";

const Index = () => (
	<>
		<Header />
		<Routes>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/app" element={<ApplicationInfo />} />
		</Routes>
		<Footer />
	</>
);

export default Index;
