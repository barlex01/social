import logo2 from "../logo2.png";
import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
        <div className={h.header__logo}>
          <a href="/" className={h.link__logo}>
            <img src={logo2} alt="" className={h.logo} />
          </a>        
        </div>
        <div className={h.header__title}>
          <h1 className={h.header__title_item}>May there be harmony with you</h1>
        </div>
        <div className={h.header__logo}>
          <a href="/" className={h.link__logo}>
            <img src={logo2} alt="" className={h.logo} />
          </a>
        </div>
        
      </header>
    )
}

export default Header;