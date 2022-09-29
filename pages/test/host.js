import Link from "next/link";
import uuid from 'react-uuid'

function Host() {

    let roomId;

    const handleNewRoom = () => {
        roomId = uuid()

    }

    return(
        <>
        <button onClick={handleNewRoom}>Generate a new room</button>
        <Link href={`./${uuid()}`}>
            Begin a new interview
        </Link>
        </>
    )
}

export default Host;