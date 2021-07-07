import Header from '../components/Header/index';
import Delivery from '../components/Delivery/index';
import Main from '../components/Main/index';
import Footer from '../components/Footer/index';
import { useEffect } from 'react';

function App() {
  // useEffect(() => {}, []);

  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         document.querySelectorAll('.main__category ').forEach((item) => {
  //           item.classList.toggle(
  //             'active',
  //             item.getAttribute('data-name') === entry.target.id,
  //           );
  //         });
  //       }
  //     });
  //   },
  //   {
  //     threshold: 0.7,
  //   },
  // );

  // document
  //   .querySelectorAll('data-sec')
  //   .forEach((item) => observer.observe(item));

  return (
    <div className="App">
      <Header />
      <Delivery />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
