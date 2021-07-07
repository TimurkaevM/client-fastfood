import Section from './FooterSection';
import Boxes from './Boxes';
import FooterSocial from './FooterSocial';

import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <Boxes />
      <div className="container">
        <div className="footer__sections">
          <Section />
          <Section />
          <div className="footer__circle"></div>
          <Section />
          <Section />
        </div>
        <FooterSocial />
      </div>
    </div>
  );
}

export default Footer;
