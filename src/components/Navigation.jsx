
import  n from './Navigation.module.css';
let navActive = n.nav__link +' ' + n.settings

function Nav() {
  return (
    <nav className={n.nav}>
      <ul className={n.nav__list}>
        <li><a className={n.nav__link} href="/">Profile</a></li>
        <li><a className={n.nav__link} href="/">Messages</a></li>
        <li><a className={n.nav__link} href="/">News</a></li>
        <li><a className={n.nav__link} href="/">Music</a></li>
        <li><a className={navActive}  href="/">Settings</a></li>
      </ul>
    </nav>
  );
}
export default Nav;