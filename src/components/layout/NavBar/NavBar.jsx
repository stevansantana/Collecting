import styles from './NavBar.module.css'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const UL = styled.ul`

    
    @media (max-width: 897px) {

        flex-direction: column;
        align-items: center;
        position: fixed;
        gap: 0;
        top: 13.5%;
        right: 0;
        height: 100vh;
        width: 40vw;
        z-index: 98;
        background: #fff;
        border-left: .5px solid grey;
        transition: .2s linear;
        margin-top: 41px;
        border-top-color: black;
        border-top-width: 1px;
        border-top-style: solid;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        
        li {
            margin-top: 30px;
        }
    }
`;

export default function NavBar ({open}) {
    return (
        <nav className={styles.nav_container}>
            <UL open={open}>
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
            </UL>
        </nav>
    )
}
