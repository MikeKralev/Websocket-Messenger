console.log("Hello World");
const input = document.getElementById("messageInput");
const sendButton = document.getElementById("sendMessageButton");
const chat = document.getElementById("chat");

const ws = new WebSocket("ws://localhost:8080");

ws.onmessage = (message) => {
  console.log(message);
  const mes = document.createElement("p");
  mes.textContent = message.data;
  mes.className = "server";
  chat.appendChild(mes);
};

function sendMessage() {
  console.log("send message button");
  const message = input.value.trim();
  if (message) {
    ws.send(message);
    const mes = document.createElement("p");
    mes.textContent = message;
    mes.className = "client";
    chat.appendChild(mes);
    input.value = "";
  }
}

sendButton.addEventListener("click", sendMessage);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
