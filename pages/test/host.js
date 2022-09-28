import Link from "next/link";
import { useEffect, useRef } from 'react'

function Host() {
    const inputRef = useRef('')
    const roomID = inputRef.current.value;
    useEffect(() => {
        console.log(inputRef.current.value)
    })
    return(
        <>
        <input type='text' placeholder="Enter a room id" ref={inputRef}/>
        <Link href={`./${roomID}`}>
            Begin a new interview
        </Link>
        </>
    )
}

export default Host;