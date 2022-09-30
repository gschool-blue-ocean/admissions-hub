import { useRouter } from 'next/router';

function BtnInterviewer() {
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
        name='interviewer'
        >
        GO TO INTERVIEWER PAGE
        </button>
    </div>
  )
}

export default BtnInterviewer