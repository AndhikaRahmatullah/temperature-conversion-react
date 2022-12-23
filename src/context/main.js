import { createContext, useContext, useReducer } from "react";

const InitialMainState = {
	codeSelect: "",
	convertFrom: "",
	convertTo: "",
	codeConvertFrom: "",
	codeConvertTo: ""
};

const MainActions = {
	SET_CODE_SELECT: "SET_CODE_SELECT",
	SET_CONVERT_FROM: "SET_CONVERT_FROM",
	SET_CONVERT_TO: "SET_CONVERT_TO",
	SET_CODE_CONVERT_FROM: "SET_CODE_CONVERT_FROM",
	SET_CODE_CONVERT_TO: "SET_CODE_CONVERT_TO",
};

const MainReducer = (state, action) => {
	switch (action.type) {
		case MainActions.SET_CODE_SELECT:
			return { ...state, codeSelect: action.payload.codeSelect };
		case MainActions.SET_CONVERT_FROM:
			return { ...state, convertFrom: action.payload.convertFrom };
		case MainActions.SET_CONVERT_TO:
			return { ...state, convertTo: action.payload.convertTo };
		case MainActions.SET_CODE_CONVERT_FROM:
			return { ...state, codeConvertFrom: action.payload.codeConvertFrom };
		case MainActions.SET_CODE_CONVERT_TO:
			return { ...state, codeConvertTo: action.payload.codeConvertTo };

		default:
			break;
	}
};

const MainContext = createContext();

export const useMain = () => {
	return useContext(MainContext);
};

const MainProvider = ({ children }) => {
	const [state, dispatch] = useReducer(MainReducer, InitialMainState);

	const MainSelect = (codeSelect, convertFrom, convertTo, codeConvertFrom, codeConvertTo) => {
		dispatch({ type: MainActions.SET_CODE_SELECT, payload: { codeSelect: codeSelect } });
		dispatch({ type: MainActions.SET_CONVERT_FROM, payload: { convertFrom: convertFrom } });
		dispatch({ type: MainActions.SET_CONVERT_TO, payload: { convertTo: convertTo } });
		dispatch({ type: MainActions.SET_CODE_CONVERT_FROM, payload: { codeConvertFrom: codeConvertFrom } });
		dispatch({ type: MainActions.SET_CODE_CONVERT_TO, payload: { codeConvertTo: codeConvertTo } });
	};

	return <MainContext.Provider value={ { ...state, MainSelect } }>{ children }</MainContext.Provider>;
};

export default MainProvider;
