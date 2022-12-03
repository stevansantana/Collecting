import styles from './Button.module.css'

export default function Button({ conteudoBtn, handleClick, handleSubmit}) {

    return (
        <button className={styles.button_area} onClick={handleClick}>{conteudoBtn}</button>
    )
}