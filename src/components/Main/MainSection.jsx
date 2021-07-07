import Scrollable from './Scrollable';

import MainCard from './MainCard';

function MainSection(props) {
  return (
    <div
      id={props.category.name}
      data-sec
      className={props.index % 2 === 0 ? 'section__grey' : 'section__white'}
    >
      <div className="container">
        <div className="section__title">{props.category.name}</div>
        <div className="section__category">
          <Scrollable _class='section__cards'>
            {props.category.products.map((product, productIndex) => {
              return (
                <MainCard
                  basket={props.basket}
                  key={product._id}
                  addedProduct={props.addedProduct}
                  deleteProduct={props.deleteProduct}
                  index={props.index}
                  productIndex={productIndex}
                  product={product}
                />
              );
            })}
          </Scrollable>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
