import styles from './Header.module.css'
// import lupa from '../../../assets/magnifying-glass-solid.svg'
import NavBar from '../NavBar/NavBar'

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <h1>Collecting</h1>
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