import CodeEditor from "../../src/components/CodeEditor"
import Dashboard from '../../src/components/Dashboard'
import Header from '../../src/components/Header'
import Footer from "../../src/components/Footer"

function id({ id }) {
    
    return (
        <>
        <Header />
        <CodeEditor sessionId={id} />
        <Dashboard />
        <Footer />
        </>       

    )
  }
  
export default id

export async function getServerSideProps({ query }) {
    let { id } = query
    return {props: {id}}
}