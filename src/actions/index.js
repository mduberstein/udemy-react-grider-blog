import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // console.log('About to fetch posts');
  await dispatch(fetchPosts());
  // console.log(getState().posts);
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // console.log(userIds); 
  // no need for await before dispatch as we don't need to wait for the responses with User data
  // since we do not do anything with them here
  // AND forEach doesn't work with async, so if we needed to wait, we might have to use
  // Promise.all(userIds.forEach...) - Grider didn't remember
  userIds.forEach(id => dispatch(fetchUser(id))); 

}



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
