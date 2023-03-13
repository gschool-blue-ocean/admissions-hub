import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  //check to ensure only one instance of the socket is running
  if (!res.socket.server.io) {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    let someStack = []; //janky fix
    io.on("connection", (socket) => {
      socket.on("input-change", (msg, room) => {
        //janky fix for flickering-repl; likely won't get you stuck
        someStack.push(msg);
        if (someStack.length > 10){
          someStack = [];
          return;
        }
        if (
          (someStack.at(-1) == someStack.at(-5) &&
            someStack.at(-2) == someStack.at(-6)) ||
          (someStack.at(-1) == someStack.at(-7) &&
            someStack.at(-2) == someStack.at(-8))
        ) {
          msg = "";
          someStack = [];
          return;
        } else {
          socket.broadcast.to(room).emit("update-input", someStack.at(-1));
        }
        // console.log("after", someStack);
      });
      socket.on("pNum-change", (num, room) => {
        socket.broadcast.to(room).emit("update-pNum", num);
        console.log(num);
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
