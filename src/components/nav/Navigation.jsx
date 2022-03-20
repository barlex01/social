
import { NavLink } from 'react-router-dom';
import n from './Navigation.module.css';

let btmBorder = `${n.nav__link} ${n.border}`;

function Nav() {
  return (
    <nav className={n.nav}>
      <ul className={n.nav__list}>
        <li>
          <NavLink activeClassName={n.navLink} className={btmBorder} to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink className={btmBorder} to="/dialogs">Messages</NavLink>
        </li>
        <li>
          <NavLink className={btmBorder} to="/news">News</NavLink>
        </li>
        <li>
          <NavLink className={btmBorder} to="/">Music</NavLink>
        </li>
        <li>
          <NavLink className={btmBorder} to="/">Settings</NavLink>
        </li>
      </ul>
      <div className={n.settings}></div>
    </nav>
  );
}
export default Nav;