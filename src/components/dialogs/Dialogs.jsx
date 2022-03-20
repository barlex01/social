import d from './Dialogs.module.css'
import Contacts from './contacts/Contacts'
const Dialogs = () => {
    return (
        <section className={d.container}>
            <Contacts />
            <div className={d.person_dialog}>
                <div className={d.person_info}>

                    <p className={d.person_name}>Aleksei</p>
                    <p className={d.person_surname}>Rassudovskii</p>
                </div>
                <p className={d.person_text}>Hello</p>
            </div>
        </section>
    )
}
export default Dialogs