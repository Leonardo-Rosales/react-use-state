import style from '../Card/Card.module.css'

export default function Card({ selectedLanguage }) {
    return (
        <div className={style.card_container}>
            <h2 className={style.title}>{selectedLanguage ? selectedLanguage.title : "Nessun linguaggio selezionato"}</h2>
            <p>{selectedLanguage ? selectedLanguage.description : ""}</p>
        </div>
    );
}