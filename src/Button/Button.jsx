import style from '../Button/Button.module.css'

export default function Button({ language, onClick, isSelected }) {

    const buttonColors = {
        backgroundColor: isSelected ? "#FFC107" : "#0D6EFD",
        color: isSelected ? "black" : "white"

    }


    return (
        <button onClick={() => onClick(language)} style={buttonColors} className={style.buttons}>
            {language.title}
        </button>
    );
}