const { Server } = require("ws");

const wss = new Server({ port: "3000" });

let messages = [];

wss.on("connection", socket => {
  socket.on("message", message => {
    console.log(message);
    messages.push(message);
    wss.clients.forEach(client => client.send(message));
  });

  socket.on("close", () => {
    console.log("socket disconnected");
  });

  socket.send("welcome to cyber chat");

  if (messages.length) {
    socket.send("chat currently in session");
    messages.forEach(message => socket.send(message));
  }

  console.log("new socket connected");
});

console.log("chat server waiting for connections on ws://localhost:3000");
