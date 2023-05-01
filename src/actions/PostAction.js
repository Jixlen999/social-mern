import * as PostApi from '@/api/PostRequest';
import {
	RETRIEVING_FAIL,
	RETRIEVING_START,
	RETRIEVING_SUCCESS,
} from '@/constants/ActionTypes';

export const getTimelinePosts = (id) => async (dispatch) => {
	dispatch({ type: RETRIEVING_START });
	try {
		const { data } = await PostApi.getTimelinePosts(id);
		dispatch({ type: RETRIEVING_SUCCESS, data });
	} catch (error) {
		dispatch({ type: RETRIEVING_FAIL });
		console.log(error);
	}
};
