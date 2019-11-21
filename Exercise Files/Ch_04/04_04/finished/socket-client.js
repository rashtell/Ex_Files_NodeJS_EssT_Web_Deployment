const io = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("socket.io client connected");
});

socket.on("chat-message", (message, id) => {
  console.log(`${id}: ${message}`);
});

process.stdin.on("data", data => {
  socket.emit("chat", data.toString().trim());
});
