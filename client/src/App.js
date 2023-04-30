import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About/About";
import Home from "./pages/Home";
import Header from "./Components/Header/Header";
import ApplicationInfo from "./pages/ApplicationInfo";
import Footer from "./Components/Footer/Footer";
const App = () => (
	<>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/app" element={<ApplicationInfo />} />
		</Routes>
		<Footer />
	</>
);

export default App;
