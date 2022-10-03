import React from 'react'
import copy from '../../public/images/copy.png'


export default function RoomURL({ URL }) {
    const handleCopy = () => {
        navigator.clipboard.writeText('URL')
    }
  return (
    <div className='flex w-full bg-gray-500 rounded-md'>
        <p className='bg-gray-500'>Room URL: {URL}</p>
        <button onClick={handleCopy()}>{copy}</button>
    </div>
  )
}
