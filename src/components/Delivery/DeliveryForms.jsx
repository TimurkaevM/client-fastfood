import { useDispatch, useSelector } from 'react-redux';
import { changeHouse, changeStreet } from '../../redux/ducks/basket';

import './Delivery.scss';

function DeliveryForms() {
  const dispatch = useDispatch();

  const street = useSelector(state => state.basket.street);
  const house = useSelector(state => state.basket.house);
  const streetError = useSelector(state => state.basket.streetError);
  const houseError = useSelector(state => state.basket.houseError);

  const handleChangeStreet = (e) => {
    dispatch(changeStreet(e.target.value));
  }; 

  const handleChangeHouse = (e) => {
    dispatch(changeHouse(e.target.value));
  } 


  return (
    <form action="#" className="delivery__forms">
      <div className="form">
        <div className="form__name">Улица</div>
        <input
          className={`form__input ${streetError ? "form__red" : ""}`}
          required
          value={street}
          onChange={handleChangeStreet}
          placeholder="Остоженка"
          type="text"
          name="street"
        />
        {streetError ? <div className="form__error">{streetError}</div> : null }
      </div>
      <div className="form">
        <div className="form__name">Дом</div>
        <input
          className={`form__input ${houseError ? "form__red" : ""}`}
          value={house}
          onChange={handleChangeHouse}
          placeholder="Остоженка"
          type="text"
          name="house"
        />
        {houseError ? <div className="form__error">{houseError}</div> : null }
      </div>
    </form>
  )
}

export default DeliveryForms
