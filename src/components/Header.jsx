import logo2 from "../logo2.png";


const Header = () => {
    return (
        <header className="header">
        <div className="header__logo">
          <a href="/" className="link__logo">
            <img src={logo2} alt="" className="logo" />
          </a>        
        </div>
        <div className="wrapper__header__title">
          <h1 className="header__title">May there be harmony with you</h1>
        </div>
        <div className="header__logo">
          <a href="/" className="link__logo">
            <img src={logo2} alt="" className="logo" />
          </a>
        </div>
        
      </header>
    )
}

export default Header;