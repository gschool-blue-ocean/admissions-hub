import { useRouter } from 'next/router';

function BtnInterviewHost() {
    const router = useRouter()
    function goLink(event, data) {
        // console.log()
        if (event.target.name === 'test') {
            router.push('../test/host')
        }
    }
  return (
        <div>
            <button
            onClick={goLink}
            name='test'
            >
            GO TO test
            </button>
        </div>
  )
}

export default BtnInterviewHost