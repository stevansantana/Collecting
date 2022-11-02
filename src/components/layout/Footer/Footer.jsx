import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer_container}>
            <h1>Collecting</h1>
            <p>Desenvolvido durante a disciplina de Programação de Software WEB</p>
            <a href="https://github.com/dsm-cefet-rj/trabalho-integrado-2022-2-grupo_2_psw" target="_blank" rel="noreferrer">GitHub</a>
        </footer>
    )
}