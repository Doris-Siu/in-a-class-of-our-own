import { Route, Routes } from "react-router-dom";

import About from "./pages/About/About";
import Home from "./pages/Home";
import Header from "./Components/Header/Header";
import ApplicationInfo from "./pages/App-info/ApplicationInfo";

const App = () => (
	<>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/app" element={<ApplicationInfo />} />
		</Routes>
	</>
);

export default App;
