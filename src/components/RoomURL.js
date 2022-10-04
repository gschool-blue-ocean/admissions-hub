import React, { useEffect, useState } from 'react'
import Router, { useRouter } from "next/router";
import Image from 'next/image';


export default function RoomURL({ URL }) {

  const [clicked, setClicked] = useState(false)
  const { asPath } = useRouter();
  useEffect(() => {

  })

  
    const handleCopy = () => {
      navigator.clipboard.writeText(asPath)
      setClicked(true)
    }

    if (clicked) {
      return (
        <div>
            <p>Room URL: {asPath}</p>
            <button onClick={handleCopy}>Copied!</button>
        </div>
      )
    } return (
      <div>
          <p>Room URL: {asPath}</p>
          <button onClick={handleCopy}><Image
          src={'/images/copy.svg'} alt="/"

        objectFit="contain"
        objectPosition="bottom center"
          width={15}
          height={15}
        /></button>
      </div>
    )
  
}
