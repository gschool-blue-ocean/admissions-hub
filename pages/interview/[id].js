import { useRouter } from "next/router"
import CodeEditor from "../../src/components/CodeEditor"
import Dashboard from '../../src/components/Dashboard'
function id() {
    const router = useRouter()
    const { id }  = router.query
    return (
        <div className="flex">
        <CodeEditor id={id} />
        <Dashboard />
        </div>
        

    )
  }
  
export default id