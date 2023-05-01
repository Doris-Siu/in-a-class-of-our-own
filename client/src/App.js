import { Route, Routes } from "react-router-dom";

import Index from "./routes/index";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => (
	<>
		<Routes>
			<Route path="/*" element={<Index />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	</>
);

export default App;
