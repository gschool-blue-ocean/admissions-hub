import { useRouter } from 'next/router';
import styles from './BtnLogin.module.css'
import { useAppContext } from "./GlobalContext";

function BtnInterviewer() {
    const { setShowWarning } = useAppContext();
    const router = useRouter()
  function goLink(event, data) {
    setShowWarning(false);
    //delete accessToken from local storage
    localStorage.removeItem("accessToken");
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