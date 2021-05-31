import './footer.scss';
import telegram from './telegram.svg';
import github from './github.svg';

const Footer = () => {
  return (
  <>
    <footer className="footer">
      <div className="contacts">
        <a href="tg://resolve?domain=@rhjje" className="telegram">
         <img src={telegram} alt="Telegram"/>
        </a>
        <a href="https://github.com/rhjje" className="git">
          <img src={github} alt="GitHub"/>
        </a>
      </div>
      <div className="created">2021г.</div>
    </footer>
  </>  
  );
};

export default Footer;