import './Main.scss';

function MainCounter(props) {
  return (
    <div className={props.checkBasket ? 'counter' : 'change'}>
      <div
        onClick={() => props.deleteProduct(props.product)}
        className="counter__min"
      >
        -
      </div>
      <div className="counter__value">{props.counter}</div>
      <div
        onClick={() => props.addedProduct(props.product)}
        className="counter__plus"
      >
        +
      </div>
    </div>
  );
}

export default MainCounter;
