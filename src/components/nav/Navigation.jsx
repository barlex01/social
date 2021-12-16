
import  n from './Navigation.module.css';

let btmBorder = `${n.nav__link} ${n.border}`;

function Nav() {
  return (
    <nav className={n.nav}>
      <ul className={n.nav__list}>
        <li><a className={btmBorder} href="/">Profile</a></li>
        <li><a className={btmBorder} href="/">Messages</a></li>
        <li><a className={btmBorder} href="/">News</a></li>
        <li><a className={btmBorder} href="/">Music</a></li>
        <li><a className={btmBorder}  href="/">Settings</a></li>
      </ul>
      <div className={n.settings}></div>
    </nav>
  );
}
export default Nav;