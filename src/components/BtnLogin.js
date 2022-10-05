import { useRouter } from 'next/router';
import styles from './BtnLogin.module.css'

function BtnInterviewer() {
    const router = useRouter()
    function goLink(event, data) {
        // console.log()
        if (event.target.name === 'login') {
            router.push('../login')
        }
    }
  return (
    <div>
        <button
        onClick={goLink}
        name='login'
        className={styles.logoutBtn}
        >
        LOGOUT
        </button>
    </div>
  )
}

export default BtnInterviewer