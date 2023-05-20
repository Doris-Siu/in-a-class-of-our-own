import { Route, Routes } from "react-router-dom";

import Main from "./routes/Main";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		// eslint-disable-next-line no-unused-vars
		const codeParam = urlParams.get("code");
	}, []);
	return (
		<>
			<Routes>
				<Route path="/*" element={<Main />} />
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard/*" element={<Dashboard />} />
			</Routes>
		</>
	);
};

export default App;
