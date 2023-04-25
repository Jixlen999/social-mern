import * as AuthApi from '@/api/AuthRequest';
import { AUTH_FAIL, AUTH_START, AUTH_SUCCESS } from '@/constants/ActionTypes';

export const logIn = (formData) => async (dispatch) => {
	dispatch({ type: AUTH_START });
	try {
		const { data } = await AuthApi.logIn(formData);
		dispatch({ type: AUTH_SUCCESS, data });
	} catch (error) {
		console.log(error);
		dispatch({ type: AUTH_FAIL });
	}
};

export const signUp = (formData) => async (dispatch) => {
	dispatch({ type: AUTH_START });
	try {
		const { data } = await AuthApi.signUp(formData);
		dispatch({ type: AUTH_SUCCESS, data });
	} catch (error) {
		console.log(error);
		dispatch({ type: AUTH_FAIL });
	}
};
