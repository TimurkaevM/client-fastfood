import { useEffect } from 'react';

import './Main.scss';

function MainCategory(props) {
  useEffect(props.executeScroll, []);

  return (
    <div data-name={props.category.name}
      onClick={() => props.executeScroll(props.category.name)}
      className={`main__category ${
        props.item === props.category.name ? 'active' : ''
      }`}
    >
      {props.category.name}
    </div>
  );
}

export default MainCategory;
