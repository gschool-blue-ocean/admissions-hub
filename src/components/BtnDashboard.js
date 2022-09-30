import { useRouter } from 'next/router';

function BtnDashboard() {

    const router = useRouter()
    function goLink(event, data) {
        // console.log()
        if (event.target.name === 'dashboard') {
            router.push('../dashboard')
        }
    }
  return (
        <div>
            <button
            onClick={goLink}
            name='dashboard'
            >
            GO TO DASHBOARD
            </button>
        </div>
  )
}

export default BtnDashboard