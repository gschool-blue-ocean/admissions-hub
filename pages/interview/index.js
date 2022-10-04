import CodeEditor from "../../src/components/CodeEditor"
import Dashboard from '../../src/components/Dashboard'
import Header from '../../src/components/Header'
import Footer from "../../src/components/Footer"
import RoomURL from "../../src/components/RoomURL"


function id({ id }) {
    const user = 'admin'
    return (
        <>
            <Header />
            <div>
                <CodeEditor sessionId={id} />
                <div>
                    <RoomURL URL={id} />
                    <Dashboard user={user}/>
                </div>
                
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