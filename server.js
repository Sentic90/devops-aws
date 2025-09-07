const http = require("http");

// An array of random messages
const messages = [
  "Hello from your Node.js server!",
  "This is a random message.",
  "Node.js is running successfully!",
  "Generating a unique response just for you.",
  "Have a great day!",
  "Your request has been processed.",
  "The server is online and operational.",
];

// Function to get a random message from the array
function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const timestamp = new Date().toLocaleTimeString();
  return `${messages[randomIndex]} - ${timestamp}`;
}

const server = http.createServer((req, res) => {
  // Extract user information
  const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userAgent = req.headers["user-agent"] || "Unknown";

  // Log the request to the console
  console.log(`[REQUEST] IP: ${userIp} | User-Agent: ${userAgent}`);

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const randomMessage = getRandomMessage();
    res.end(randomMessage);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
