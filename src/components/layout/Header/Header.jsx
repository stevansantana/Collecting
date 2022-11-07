import styles from './Header.module.css'
// import lupa from '../../../assets/magnifying-glass-solid.svg'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Link to='/'>
                    <h1>Collecting</h1>
                </Link>
                <div className={styles.search_area}>
                    <input
                        type="text"
                        name="procurar"
                        className="search-field"
                        placeholder="Procurar item" />
                    {/* <button className="search-button">
                        <img src={lupa} alt="lupa" />
                    </button> */}

                </div>
            </div>
            <NavBar/>
        </header>
    )
}