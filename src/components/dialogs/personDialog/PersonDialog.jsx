import d from '../Dialogs.module.css'

const PersonDialog = (props) => {
    return (
    <div className={d.person_dialog}>
        <div className={d.person_info}>

            <p className={d.person_name}>Aleksei</p>
            <p className={d.person_surname}>Rassudovskii</p>
        </div>
        <p className={d.person_text}>{props.text}</p>
    </div>
    )
}
export {PersonDialog}
