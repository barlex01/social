
import { NavLink } from 'react-router-dom';
import n from './Navigation.module.css';

let btmBorder = `${n.nav__link} ${n.border}`;

function Nav() {
  return (
    <nav className={n.nav}>
      <ul className={n.nav__list}>
        <li>
          <NavLink style={({isActive}) => ({color: isActive ? 'rgba(30, 143, 255, 0.54)' : ''})}  className={btmBorder} to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => ({color: isActive ? 'rgba(30, 143, 255, 0.54)' : ''})} className={btmBorder} to="/dialogs">Messages</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => ({color: isActive ? 'rgba(30, 143, 255, 0.54)' : ''})} className={btmBorder} to="/news">News</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => ({color: isActive ? 'rgba(30, 143, 255, 0.54)' : ''})} className={btmBorder} to="/S">Music</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => ({color: isActive ? 'rgba(30, 143, 255, 0.54)' : ''})} className={btmBorder} to="/">Settings</NavLink>
        </li>
      </ul>
      <div className={n.settings}></div>
    </nav>
  );
}
export default Nav;