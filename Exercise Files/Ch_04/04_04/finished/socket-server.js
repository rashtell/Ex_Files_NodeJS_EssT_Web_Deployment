const { createServer } = require("http");
const socketIO = require("socket.io");

const server = createServer().listen(3000);
const io = socketIO(server);

io.on("connection", socket => {
  console.log(`${io.engine.clientsCount} connections`);

  socket.on("chat", message => {
    console.log(`${socket.id}: ${message}`);
    io.sockets.emit("chat-message", message, socket.id);
  });

  socket.on("disconnect", () => {
    console.log(`disconnect: ${socket.id}`);
  });
});

console.log("Socket Server");
