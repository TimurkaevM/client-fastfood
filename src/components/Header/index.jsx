import Boxes from './Boxes';
import Basket from './Basket';
import Burger from './Burger';

import './Header.scss';

function Header() {
  return (
    <div className="container">
      <div className="header">
        <Burger />
        <Boxes />
        <Basket />
      </div>
    </div>
  );
}

export default Header;
