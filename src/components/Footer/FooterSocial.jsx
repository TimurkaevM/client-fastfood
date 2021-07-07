import AppStore from '../../assets/img/AppStore.png';
import GooglePlay from '../../assets/img/GooglePlay.png';

import './Footer.scss';

function FooterSocial() {
  return (
    <div className="footer__socials">
      <div className="footer__social">
        <i className="fa fa-vk" aria-hidden="true"></i>
        <i className="fa fa-facebook" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-odnoklassniki" aria-hidden="true"></i>
      </div>
      <div className="footer__store">
        <img src={GooglePlay} alt="#" />
        <img src={AppStore} alt="#" />
      </div>
    </div>
  );
}

export default FooterSocial;
