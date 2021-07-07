import { useDispatch, useSelector } from 'react-redux';
import DeliveryForms from './DeliveryForms';
import { setActiveFalse, setActiveTrue } from '../../redux/ducks/basket';

import './Delivery.scss';

function Delivery() {
  const dispatch = useDispatch();

  const active = useSelector((state) => state.basket.active);

  const changeDelivery = () => {
    dispatch(setActiveTrue());
  };

  const deleteDelivery = () => {
    dispatch(setActiveFalse());
  };

  return (
    <div className="container">
      <div className="delivery">
        <div className="delivery__title">
          <h1>Доставка г. Москва</h1>
          <div className="delivery__buttons">
            <div onClick={changeDelivery} className={active ? 'active' : ''}>
              Доставка
            </div>
            <div onClick={deleteDelivery} className={active ? '' : 'active'}>
              Самовывоз
            </div>
          </div>
        </div>

        {active ? <DeliveryForms /> : null}
      </div>
    </div>
  );
}

export default Delivery;
