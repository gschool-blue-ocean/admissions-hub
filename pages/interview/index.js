import CodeEditor from "../../src/components/CodeEditor"
import Dashboard from '../../src/components/Dashboard'
import Header from '../../src/components/Header'
import Footer from "../../src/components/Footer"
function id({ id }) {
    
    return (
        <>
        <Header />
        <div className="flex">
            <CodeEditor sessionId={id} />
            <Dashboard />
        </div>
        <Footer />
        </>       

    )
  }
  
export default id

export async function getServerSideProps({ query }) {
    let { id } = query
    return {props: {id}}
}