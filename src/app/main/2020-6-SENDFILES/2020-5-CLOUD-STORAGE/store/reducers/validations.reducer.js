import * as Actions from '../actions/validation.action';

const initialState = {
	error: null
};

const uploaderReducer = function (state = initialState, action) {
	switch (action.type) {
		case Actions.VALIDATE_FORM_ERROR:
			return {
				...state,
				error: true
			};
		default: {
			return state;
		}
	}
};

export default uploaderReducer;
