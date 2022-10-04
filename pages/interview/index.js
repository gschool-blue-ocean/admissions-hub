import CodeEditor from "../../src/components/CodeEditor"
import Dashboard from '../../src/components/Dashboard'
import Header from '../../src/components/Header'
import Footer from "../../src/components/Footer"
function Id({ id }) {
    
    return (
        <>
        <Header />
        <CodeEditor sessionId={id} />
        <Dashboard />
        <Footer />
        <h1>testing</h1>
        </>       

    )
  }
  
export default Id

export async function getServerSideProps({ query }) {
    let { id } = query
    return {props: {id}}
}