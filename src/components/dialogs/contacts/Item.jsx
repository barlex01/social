import i from './Item.module.css';
import image from '../../../img/avatar.JPG';

function Item() {
    return (
        <li className={i.item}>
            <img className={i.img} src={image} alt="" />
            <p className={i.name}>
                Aleksei
            </p>
            <p className={i.surname}>
                Rassudovskii
            </p>
        </li>
    );
}

export default Item