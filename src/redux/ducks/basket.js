import { api } from '../../api/api';

const POST_START = 'basket/load/start';
const POST_SUCCESS = 'basket/load/success';
const ADDED = 'basket/added/success';
const DELETE = 'basket/delete/success';
const HOUSE = 'change/house';
const STREET = 'change/street';
const STREET_ERROR = 'change/street/error';
const HOUSE_ERROR = 'change/house/error';
const ITEMS_ERROR = 'change/items/error';
const PRICE_ERROR = 'change/price/error';
const SET_TRUE = 'active/true';
const SET_FALSE = 'active/false';

const initialState = {
  items: [],
  price: 0,
  street: '',
  house: '',
  loading: false,
  active: false,
  message: '',
};

export default function basket(state = initialState, action) {
  switch (action.type) {
    case POST_START:
      return {
        ...state,
        loading: true,
      };

    case POST_SUCCESS:
      return {
        ...state,
        items: [],
        price: 0,
        street: '',
        house: '',
        loading: false,
        message: action.payload.message,
      };

    case SET_TRUE:
      return {
        ...state,
        active: true,
      };

    case SET_FALSE:
      return {
        ...state,
        active: false,
      };

    case ADDED:
      return {
        ...state,
        items: [...state.items, action.payload],
        price: state.price + +action.payload.price,
        itemsError: null,
        priceError: null,
      };

    case DELETE:
      const deleteItems = state.items.filter(
        (item) => item._id === action.payload._id,
      );

      if (deleteItems === 1) {
        return {
          ...state,
          items: [
            state.items.filter((item) => item._id !== action.payload._id),
          ],
          price: state.price - +deleteItems[0].price,
        };
      }
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item._id !== action.payload._id),
          ...deleteItems.filter(
            (item, index) => index !== deleteItems.length - 1,
          ),
        ],
        price: state.price - +deleteItems[0].price,
      };

    case HOUSE:
      return {
        ...state,
        house: action.payload,
        houseError: null,
      };

    case STREET:
      return {
        ...state,
        street: action.payload,
        streetError: null,
      };

    case STREET_ERROR:
      return {
        ...state,
        streetError: 'Нужно заполнить для оформления доставки',
      };

    case HOUSE_ERROR:
      return {
        ...state,
        houseError: 'Нужно заполнить для оформления доставки',
      };

    case PRICE_ERROR:
      return {
        ...state,
        priceError: 'Корзина пуста',
      };

    case ITEMS_ERROR:
      return {
        ...state,
        itemsError: 'Корзина пуста',
      };

    default:
      return state;
  }
}

export function addedProductInBasket(product) {
  return {
    type: ADDED,
    payload: product,
  };
}

export function deleteProductInBasket(product) {
  return {
    type: DELETE,
    payload: product,
  };
}

export function changeHouse(e) {
  return {
    type: HOUSE,
    payload: e,
  };
}

export function changeStreet(e) {
  return {
    type: STREET,
    payload: e,
  };
}

export function changeStreetError() {
  return {
    type: STREET_ERROR,
  };
}

export function changePriceError() {
  return {
    type: PRICE_ERROR,
  };
}

export function changeHouseError() {
  return {
    type: HOUSE_ERROR,
  };
}

export function changeItemsError() {
  return {
    type: ITEMS_ERROR,
  };
}

export function setActiveTrue() {
  return {
    type: SET_TRUE,
  };
}

export function setActiveFalse() {
  return {
    type: SET_FALSE,
  };
}

export const postBasket = ({ items, street, house, price }) => {
  return (dispatch) => {
    dispatch({ type: POST_START });

    api
      .post('/basket', {
        items: items,
        price: price,
        street: street,
        house: house,
      })
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: POST_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
