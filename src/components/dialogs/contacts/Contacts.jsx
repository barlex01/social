import c from './Contacts.module.css';

import Item from './Item';
const Contacts = () => {
    return (
        <div className={c.contacts}>
        <ul className={c.items}>
           <Item name = 'Aleksei' surname = 'Rassudovskii'/>
           
        </ul>
           
        
        </div>
    )
}
export default Contacts