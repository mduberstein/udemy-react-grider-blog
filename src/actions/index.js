import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => 
  async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
  //  Typical error, dispatching the entire response
  dispatch({type: 'FETCH_POSTS', payload: response});
  // Correcttion of typical error:
  // dispatch({type: 'FETCH_POSTS', payload: response.data});
  };