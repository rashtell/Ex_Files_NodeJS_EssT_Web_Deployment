const { Server } = require("ws");

const wss = new Server({ port: "3000" });

wss.on("connection", socket => {
  socket.on("close", () => {
    console.log("socket disconnected");
  });

  console.log("new socket connected");
});

console.log("chat server waiting for connections on ws://localhost:3000");
