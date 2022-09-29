import { useRouter } from "next/router"
import CodeEditor from "../../src/components/CodeEditor"
function test() {
    const router = useRouter()
    const { id }  = router.query
    return (
        <CodeEditor id={id} />
    )
  }
  
export default test