import { Server } from 'Socket.IO';


const SocketHandler = (req,res) => {
    //check to ensure only one instance of the socket is running
    if (res.socket.server.io) console.log('Socket is already running')
    else {
        console.log('Socket is initializing')
        const io = new Server(res.socket.server)
        res.socket.server.io = io

        io.on('connection', socket => {
            //allows clients to join socket
            socket.on('join-room', id => {
                console.log(`user ${id} joined`)
                socket.join(id)
            })
            //keeps messages synced between conntected clients
            socket.on('input-change', (msg, id) => {
                socket.broadcast.to(id).emit('update-input', msg)
            })
        })
    }
    res.end()
}

export default SocketHandler;