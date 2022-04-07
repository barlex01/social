import d from './Dialogs.module.css'
import Contacts from './contacts/Contacts'
import { PersonDialog } from './personDialog/PersonDialog'


const Dialogs = () => {
    let contactsMessage = [

        { id: 0, message:'Hello' },
        { id: 1,message:'See you aftermoon'},
        { id: 2, message:'i am happy' },
        { id: 3, message: 'yes happy near with me'},
    ]
    let personElements = contactsMessage.map(c => <PersonDialog text={c.message} /> )
    return (
        <section className={d.container}>
            <Contacts />
            <ul>
               {personElements}
            </ul>





        </section>
    )
}
export default Dialogs