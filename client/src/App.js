import { Route, Routes } from "react-router-dom";

import Main from "./routes/Main";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const codeParam = urlParams.get("code");
		console.log(codeParam);
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
