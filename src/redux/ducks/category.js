import { api } from '../../api/api';

const LOAD_START = 'categories/load/start';
const LOAD_SUCCESS = 'categories/load/success';

const initialState = {
  items: [],
  load: false,
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        load: true,
      };

    case LOAD_SUCCESS:
      return {
        ...state,
        items: action.payload,
        load: false,
      };

    default:
      return state;
  }
}

export const loadCategories = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_START });

    api
      .get('/categories')
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: LOAD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
