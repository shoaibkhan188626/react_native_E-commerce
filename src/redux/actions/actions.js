import axios from 'axios';

//making an axios instance so we do not have to call th api multiple times
const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
});

//helper function to handle async dispatch action
const asyncActionHandler = async (dispatch, actionType, asyncCallback) => {
  dispatch({type: `${actionType}_REQUEST`});
  try {
    const data = await asyncCallback();
    dispatch({type: `${actionType}_SUCCESS`, payload: data});
  } catch (error) {
    dispatch({
      type: `${actionType}_FAILURE`,
      payload: error.response ? error.response.data : error.message,
    });
  }
};

export const fetchProducts = () => async (dispatch) => {
  asyncActionHandler(dispatch, 'FETCH_PRODUCTS', async () => {
    const response = await axiosInstance.get('/products');
    return response.data.products;
  });
};


export const loginUser = (username, password) => dispatch => {
  dispatch({type: 'LOGIN_REQUEST'});
  if (username === 'admin' && password === 'password') {
    dispatch({type: 'LOGIN_SUCCESS', payload: {username}});
  } else {
    dispatch({type: 'LOGIN_FAIL', payload: 'invalid credentials'});
  }
};
