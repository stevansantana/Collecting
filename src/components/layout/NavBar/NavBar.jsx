import styles from './NavBar.module.css'

export default function NavBar(){
    return(
        <nav className={styles.nav_container}>
            <ul>
                <li>
                    Carrinho
                </li>
                <li>
                    Meus pedidos
                </li>
                <li>
                    Login
                </li>
                <li>
                    Chat
                </li>
                <li>
                    Cadastrar
                </li>
            </ul>
        </nav>
    )
}