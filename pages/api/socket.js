import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  //check to ensure only one instance of the socket is running
  console.log("Socket is initializing");
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("input-change", (msg, room) => {
        socket.broadcast.to(room).emit("update-input", msg);
      });
      socket.on("pNum-change", (num, room) => {
        console.log(num);
        socket.broadcast.to(room).emit("update-pNum", num);
      });
      socket.on("leave", (room, cb) => {
        socket.leave(room);
        cb(`left room ${room}`);
      });
      socket.on("join", (room, cb) => {
        socket.join(room);
        cb(`joined room ${room}`);
      });
      // socket.on("ping", (callback) => {
      //   callback();
      // });
    });
  }
  res.end();
};

export default SocketHandler;
