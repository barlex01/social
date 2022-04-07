
import c from './Contacts.module.css';

import Item from './Item';
const Contacts = () => {

let contactsData = [
                    {id: 0, name:'Alexei',surname:'Rassudovskii'},
                    {id: 1, name:'Anton',surname:'Antonov'},
                    {id: 2, name:'Valerii', surname:'Mudadze'},
                    {id: 3, name:'Anton', surname:'Maruhin'},
                ]

let itemElements = contactsData.map(i =><Item id={i.id}  name={i.name} surname={i.surname} /> )                    
    return (
        <div className={c.contacts}>
            <ul className={c.items}>
               {itemElements}

            </ul>


        </div>
    )
}
export default Contacts