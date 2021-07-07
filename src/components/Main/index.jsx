import MainMenu from './MainMenu';
import MainContent from './MainContent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadCategories } from '../../redux/ducks/category';

import './Main.scss';

function Main() {
  const dispatch = useDispatch();
  const load = useSelector((state) => state.category.load);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  if (load) {
    return <div>ddsd</div>;
  }

  return (
    <div className="main">
      <MainMenu />
      <MainContent />
    </div>
  );
}

export default Main;
