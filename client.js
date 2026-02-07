console.log("Hello World");
const input = document.getElementById("messageInput");
const sendButton = document.getElementById("sendMessageButton");

const ws = new WebSocket("ws://localhost:8080");

ws.onmessage = (message) => {
  console.log(message);
};

function sendMessage() {
  console.log("send message button");
  const message = input.value.trim();
  if (message) {
    ws.send(message);
    input.value = "";
  }
}

sendButton.addEventListener("click", sendMessage);
