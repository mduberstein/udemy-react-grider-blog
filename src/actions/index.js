import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
  // Bad Approach !!!
  const response = await jsonPlaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: response
  };
};