import i from './Item.module.css';

import { NavLink } from 'react-router-dom';
import img from './ava2.jpeg'
function Item(props) {
    return (
       <NavLink to={`/dialogs/${props.id}`}>
        <li className={i.item}>
            <img className={i.img} src={img} alt="" />
            <p className={i.name}>
                {props.name}
            </p>
            <p className={i.surname}>
                {props.surname}
            </p>
        </li>
        </NavLink> 
    );
}

export default Item