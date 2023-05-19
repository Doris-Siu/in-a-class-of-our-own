import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./Components/context.js";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<AppProvider>
			<App />
		</AppProvider>
	</BrowserRouter>
);
