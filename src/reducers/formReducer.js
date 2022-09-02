export const formActions = {
	CHANGE_INPUT: "CHANGE_INPUT"
};

export const formReducer = (state, action) => {
	switch (action.type) {
		case (formActions.CHANGE_INPUT):
			return {
				...state,
				[action.payload.name]: action.payload.value
			};
		default:
			return state;
	}
};