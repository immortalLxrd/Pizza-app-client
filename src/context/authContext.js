import {createContext, useMemo, useReducer} from "react";
import jwtDecode from "jwt-decode";


const initialState = {
	user: null
};

if (localStorage.getItem("token")) {
	const decodedToken = jwtDecode(localStorage.getItem("token"));

	if (decodedToken.exp * 1000 < Date.now()) {
		localStorage.removeItem("token");
	} else {
		initialState.user = decodedToken;
	}
}

const AuthContext = createContext({
	user: null,
	login: (token) => {
	},
	logout: () => {
	}
});

const authActions = {
	LOGIN: "LOGIN",
	LOGOUT: "LOGOUT"
}

function authReducer(state, action) {
	switch (action.type) {
		case authActions.LOGIN:
			return {
				...state,
				user: action.payload
			};
		case authActions.LOGOUT:
			return {
				...state,
				user: null
			};
		default:
			return state;
	}
}


function AuthProvider(props) {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const login = (token) => {
		localStorage.setItem("token", token);
		dispatch({
			type: authActions.LOGIN,
			payload: token
		});
	}

	const logout = () => {
		localStorage.removeItem("token");
		dispatch({type: authActions.LOGOUT});
	}

	return (
		<AuthContext.Provider
			value={{user: state.user, login, logout}}
			{...props}
		/>
	);
}


export {AuthContext, AuthProvider};