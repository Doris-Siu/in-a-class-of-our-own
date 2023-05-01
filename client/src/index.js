import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DarkModeContextProvider } from "./context/darkModeContext";
import App from "./App";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<DarkModeContextProvider>
			<App />
		</DarkModeContextProvider>
	</BrowserRouter>
);
