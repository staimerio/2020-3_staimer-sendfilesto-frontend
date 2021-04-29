import { showSnackbarMessage } from 'app/utils';

/***************************************************************
 * Variables
 ***************************************************************/

export const VALIDATE_FORM_ERROR = '[ERROR] VALIDATE_FORM_ERROR';
/***************************************************************
 * Actions
 ***************************************************************/

export const validationError = message => {
	return dispatch => {
		showSnackbarMessage(message, 'warning', dispatch);
		dispatch({
			type: VALIDATE_FORM_ERROR
		});
	};
};
