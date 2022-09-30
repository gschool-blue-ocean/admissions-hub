import Link from "next/link";
import { useRef } from "react";
import uuid from 'react-uuid'

function Host() {

    const roomRef = useRef('')

    return(
        <>
        <button><Link href={{pathname: '/interview', query: {id: uuid()}}}>
            Launch Interview
        </Link></button>
        
        
        </>
    )
}

export default Host;