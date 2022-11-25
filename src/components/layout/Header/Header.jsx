import styles from './Header.module.css'
import { seekProductState } from '../../../atoms'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import NavBurger from '../NavBurger/NavBurger'

export default function Header() {

    const [seekProductName, setSeekProductName] = useRecoilState(seekProductState)


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
                        value={seekProductName}
                        onChange={e => setSeekProductName(e.target.value)}
                    />
                </div>
            </div>
            <NavBurger/>
        </header>
    )
}