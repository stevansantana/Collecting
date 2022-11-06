import styles from './Button.module.css'

export default function Button({ conteudoBtn }) {

    return (
        <button className={styles.button_area}>{conteudoBtn}</button>
    )
}