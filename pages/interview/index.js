import CodeEditor from "../../src/components/CodeEditor"
import Dashboard from '../../src/components/Dashboard'
import Header from '../../src/components/Header'
import Footer from "../../src/components/Footer"
import RoomURL from "../../src/components/RoomURL"
import Router, { useRouter } from "next/router";

function id({ id }) {

    const router = useRouter();
    const user = 'admin'

    
    return (
        <>
            <Header />
            <div className="flex ml-4 mt-4 space-x-6">
                <CodeEditor sessionId={id} />
                <div className="flex flex-col">
                    <RoomURL URL={id} />
                    <Dashboard user={user}  className='mt-8'/>
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