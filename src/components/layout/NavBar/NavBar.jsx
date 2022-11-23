import styles from './NavBar.module.css'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className={styles.nav_container}>
            <ul>
                <li>
                    <Link to={'/cart'}>
                        Carrinho
                    </Link>
                </li>
                <li>
                    Meus pedidos
                </li>
                <li>
                    <Link to={'/Login'}>
                        Login
                    </Link>
                </li>
                <li>
                    Chat
                </li>
                <li>
                    <Link to={'/sign-up'}>
                        Cadastrar
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
