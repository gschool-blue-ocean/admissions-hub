import Link from "next/link";
import uuid from 'react-uuid'

function Host() {

    let roomId;

    const handleNewRoom = () => {
        roomId = uuid()

    }

    return(
        <>
        <button onClick={handleNewRoom}><Link href={`../interview/${uuid()}`}>
            Begin a new interview
        </Link></button>
        
        </>
    )
}

export default Host;