import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import ApplicationInfo from "./pages/ApplicationInfo";

const App = () => (
	<>
		<Header />
		<Banner />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/app" element={<ApplicationInfo />} />
		</Routes>
	</>
);

export default App;
