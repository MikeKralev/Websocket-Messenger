import {WebSocketServer} from "ws";

const PORT = 8080;
const wws = new WebSocketServer({ port: PORT });

wws.on("connection", (ws) => {
  console.log("New client connected");

  ws.send("Welcome to the WebSocket server!");

  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Server received: ${message}`);
  });
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
