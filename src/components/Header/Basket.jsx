import { useSelector, useDispatch } from 'react-redux';
import { postBasket, changeStreetError, changePriceError, changeItemsError, changeHouseError } from '../../redux/ducks/basket';
import './Header.scss';

function Basket() {
  const dispatch = useDispatch();

  const price = useSelector((state) => state.basket.price);
  const items = useSelector((state) => state.basket.items);
  const street = useSelector((state) => state.basket.street);
  const house = useSelector((state) => state.basket.house);
  const priceError = useSelector((state) => state.basket.priceError);
  const active = useSelector((state) => state.basket.active);
  const message = useSelector((state) => state.basket.message);

  const handlePostBasket = () => {
    if(price === 0) {
      dispatch(changePriceError())
    } else if(items.length === 0) {
      dispatch(changeItemsError())
    } else if(street === '') {
      dispatch(changeStreetError())
    } else if(house === '') {
      dispatch(changeHouseError())
    } else {
      console.log(message);
      dispatch(postBasket({items, price, street, house}));
    }
  }



  return (
    <button disabled={!active} onClick={handlePostBasket} className="header__basket">
      <div className="header__price">
        <span>{price}</span>
        <i className="fa fa-rub" aria-hidden="true"></i>
      </div>
      <div className="header__icon">
        <i className="fa fa-shopping-basket" aria-hidden="true"></i>
      </div>
      {priceError ? <div className="header__error">{priceError}</div> : null }
    </button>
  );
}

export default Basket;
