import MainCounter from './MainCounter';

function MainCard(props) {
  const checkBasket = props.basket.some(
    (item) => item._id === props.product._id,
  );
  
  const counter = props.basket.filter(
    (item) => item._id === props.product._id,
  ).length;

  return (
    <div
      className={
        props.index % 2 === 0
          ? `card ${checkBasket ? 'active' : ''}`
          : `card--grey ${checkBasket ? 'active' : ''}`
      }
    >
      <div className="card__img">
        <img src={props.product.img} alt="" />
        <div
          onClick={() => props.addedProduct(props.product)}
          className={checkBasket ? 'change' : 'card__choice'}
        >
          +
        </div>
        <MainCounter
          productIndex={props.productIndex}
          counter={counter}
          product={props.product}
          addedProduct={props.addedProduct}
          checkBasket={checkBasket}
          deleteProduct={props.deleteProduct}
        />
      </div>
      <div className="card__title">{props.product.name}</div>
      <div className="card__price">
        {props.product.price}{' '}
        <i className="fa fa-rub card__rub" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default MainCard;
