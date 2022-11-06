import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import styles from './BackButton.module.css'


export default function BackButton() {

    const nav = useNavigate()

    return (
        <button
            className={styles.backbutton_area}
            onClick={() => nav(-1)}>
            <BsArrowLeftCircleFill />
        </button>
    )
}