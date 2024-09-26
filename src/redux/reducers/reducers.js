// Action Types
const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

// Initial Product State
const initialProductState = {
  loading: false,
  products: [],
  error: null,
};

// Product Reducer
export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null }; // Reset error on request
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Initial Auth State
const initialAuthState = {
  user: null,
  error: null,
  loading: false, // Track loading for async actions
};

// Auth Reducer
export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null }; // Reset error and set loading
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
