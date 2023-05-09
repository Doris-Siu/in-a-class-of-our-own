import { Route, Routes } from "react-router-dom";

import Main from "./routes/Main";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";

const App = () => (
	<>
		<Routes>
			<Route path="/*" element={<Main />} />
			<Route path="/register" element={<Register />} />
			<Route path="/dashboard/*" element={<Dashboard />} />
		</Routes>
	</>
);

export default App;
