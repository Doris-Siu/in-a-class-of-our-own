import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [globalgithubName, setGlobalgithubName] = useState("");

	return (
		<AppContext.Provider
			value={{
				globalgithubName,
				setGlobalgithubName,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
