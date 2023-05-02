import { Route, Routes } from "react-router-dom";

import Main from "./routes/Main";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => (
	<>
		<Routes>
			<Route path="/*" element={<Main />} />
			<Route path="/dashboard/*" element={<Dashboard />} />
		</Routes>
	</>
);

export default App;
