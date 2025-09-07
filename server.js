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

// Create the server
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    // Set the response header
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Get a random message and send it as the response body
    const randomMessage = getRandomMessage();
    res.end(randomMessage);
  } else {
    // Handle other requests with a 404 Not Found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
