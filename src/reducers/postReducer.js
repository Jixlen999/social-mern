const {
	UPLOAD_START,
	UPLOAD_SUCCESS,
	UPLOAD_FAIL,
} = require('@/constants/ActionTypes');

const initialState = {
	posts: [],
	error: false,
	uploading: false,
};

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPLOAD_START:
			return { ...state, uploading: true, error: false };
		case UPLOAD_SUCCESS:
			return {
				...state,
				uploading: false,
				error: false,
				posts: [action.data, ...state.posts],
			};
		case UPLOAD_FAIL:
			return { ...state, error: true, uploading: false };
		default:
			return state;
	}
};
