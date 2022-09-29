import React, { useEffect, useState } from 'react'
import Editor from "@monaco-editor/react";
import io, { Socket } from 'Socket.IO-client'
let socket;


export default function CodeEditor({ id }) {

    const [input, setInput] = useState('')
    const onChangeHandler = (e) => {
        setInput(e)
        socket.emit('input-change', e, id)
    }

    useEffect(() => {
        socketInitializer()
    }, [])
    
    const socketInitializer = async () => {
        await fetch('/api/socket')
        socket = io()

        socket.emit('join-room', id)
        socket.on('connect', () => {
            console.log(`connected with user ${id}`)
            
        })

        socket.on('update-input', msg => {
            setInput(msg)
        })
    }
    return (
      <>
      <p>Your interview id is {id}</p>
      <Editor
     height="90vh"
     width="50vw"
     defaultLanguage="javascript"
     theme="vs-dark"
     value={input}
     onChange={(e) => onChangeHandler(e)}
   />
   </>
    )
    }
