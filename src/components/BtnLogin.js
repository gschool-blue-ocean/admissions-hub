import { useRouter } from 'next/router';

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
        >
        LOGOUT
        </button>
    </div>
  )
}

export default BtnInterviewer