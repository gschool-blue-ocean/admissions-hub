import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import CodeEditor from "../../src/components/CodeEditor"
import Dashboard from '../../src/components/Dashboard'
function id({ id }) {
    
   
    
    // const router = useRouter()
    // const { pathname } = router
    // const { id }  = router.query
    // const [sessionId, setSessionId] = useState(id)
    // console.log('external id:', id)

    useEffect(() => {
        console.log('state id:', id)
        // setSessionId(id)
    }, [])

   

    return (
        <div className="flex">
        <CodeEditor sessionId={id} />
        <Dashboard />
        </div>
        

    )
  }
  
export default id

export async function getServerSideProps({ query }) {
    let { id } = query
    return {props: {id}}
}