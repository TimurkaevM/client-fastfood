import { useSelector, useDispatch } from 'react-redux';
import MainSection from './MainSection';
import './Main.scss';
import {
  addedProductInBasket,
  deleteProductInBasket,
} from '../../redux/ducks/basket';

function MainContent(props) {
  const categories = useSelector((state) => state.category.items);
  const basket = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  const addedProduct = (product) => {
    dispatch(addedProductInBasket(product));
  };

  const deleteProduct = (product) => {
    dispatch(deleteProductInBasket(product));
  };

  return (
    <div className="main__content">
      <section className="section">
        {categories.map((category, index) => {
          return (
            <MainSection
              key={category._id}
              category={category}
              basket={basket}
              addedProduct={addedProduct}
              deleteProduct={deleteProduct}
              index={index}
            />
          );
        })}
      </section>
    </div>
  );
}

export default MainContent;
