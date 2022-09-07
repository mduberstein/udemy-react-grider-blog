import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  //  Typical error, dispatching the entire response
  // dispatch({type: 'FETCH_POSTS', payload: response});
  // Correction of typical error:
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// ALT1 - Clip 279 Memoized Approach - drawback: no way to refetch a User
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch( {type: 'FETCH_USER', payload: response.data})
// });
