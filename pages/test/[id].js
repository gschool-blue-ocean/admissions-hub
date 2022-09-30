import { useRouter } from "next/router"
import CodeEditor from "../../src/components/CodeEditor"
function test() {
    const router = useRouter()
    const { id }  = router.query
    return (
      <div>
        <CodeEditor id={id} />
      </div>  
    )
  }
  
export default test