import styles from './NavBar.module.css'
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { useRecoilState } from 'recoil'
import { usuarioLogadoState } from '../../../atoms'


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
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        
        li {
            margin-top: 30px;
        }
    }
`;

export default function NavBar({ open }) {

   const [usuario, setUsuario] = useRecoilState(usuarioLogadoState)
   const navigate = useNavigate()

   function logout(){
      
      if(usuario)
      {
         var x = window.confirm('Tem certeza que deseja sair ?')

         if(x)
         {
            localStorage.removeItem('token')
            setUsuario(undefined)
            navigate('/Login')
         }
      }
   }
   
   return (
      <nav className={styles.nav_container}>
         <UL open={open}>
            {usuario === undefined && (
               <>
                  <li>
                     <Link to={'/Login'}>
                        Login
                     </Link>
                  </li>
                  <li>
                     <Link to={'/sign-up'}>
                        Cadastrar
                     </Link>
                  </li>
               </>
            )}
            {usuario !== undefined && (
               <>
                  <li>
                     <Link to={'/cart'}>
                        Carrinho
                     </Link>
                  </li>
                  <li>
                     <Link to={'/'}>
                        {usuario.name.split(' ')[0]}
                     </Link>
                  </li>
                  <li onClick={logout}>
                     <Link>
                        Sair
                     </Link>
                  </li>
               </>
            )}
         </UL>
      </nav>
   )
}
