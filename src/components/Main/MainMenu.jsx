import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import MainCategory from './MainMenuItem';

import './Main.scss';

function MainMenu() {
  const categories = useSelector((state) => state.category.items);
  const [fixed, setFixed] = useState('');
  const [item, setItem] = useState('');

  const listenScrollEvent = (event) => {
    const headerHeight = document.querySelector('.header').clientHeight,
      deliveryHeight = document.querySelector('.delivery').clientHeight;

    if (window.scrollY < headerHeight + deliveryHeight) {
      return setFixed('');
    } else if (window.scrollY >= headerHeight + deliveryHeight) {
      return setFixed('main__categories');
    }
  };

  const changeActiveScroll = (event) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelectorAll('.main__category').forEach((item) => {
              item.classList.toggle(
                'active',
                item.getAttribute('data-name') === entry.target.id,
              );
            });

            setItem('');
          }
        });
      },
      {
        threshold: 0.7,
      },
    );

    document
      .querySelectorAll('.section__white')
      .forEach((item) => observer.observe(item));
    document
      .querySelectorAll('.section__grey')
      .forEach((item) => observer.observe(item));
  };

  const executeScroll = (name) => {
    if (!name) {
      const headerHeight = document.querySelector('.header');
      headerHeight.scrollIntoView({ behavior: 'smooth' });
    } else {
      const itemName = document.querySelector(`#${name}`);
      itemName.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setItem(name);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    window.addEventListener('scroll', changeActiveScroll);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
      window.removeEventListener('scroll', changeActiveScroll);
    };
  }, []);

  return (
    <div className={fixed}>
      <div className="main__container">
        {categories.map((category) => {
          return (
            <MainCategory
              executeScroll={executeScroll}
              key={category._id}
              category={category}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainMenu;
