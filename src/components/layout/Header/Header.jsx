import styles from './Header.module.css'
import { seekProductState } from '../../../atoms'
import { Link } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import NavBurger from '../NavBurger/NavBurger'

export default function Header() {

    const setSeekProductName = useSetRecoilState(seekProductState)
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
                        placeholder="Procurar item"
                        onChange={e => setSeekProductName(e.target.value)}
                    />
                </div>
            </div>
            <NavBurger />
        </header>
    )
}