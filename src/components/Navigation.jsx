


const Nav = () => {
    return (
        <nav className="nav">
        <ul className="nav__list">
          <li><a className="nav__link" href="/">Profile</a></li>
          <li><a className="nav__link" href="/">Messages</a></li>
          <li><a className="nav__link" href="/">News</a></li>
          <li><a className="nav__link" href="/">Music</a></li>
          <li><a className="nav__link settings" href="/">Settings</a></li>
        </ul>
      </nav>
    )
}
export default Nav;