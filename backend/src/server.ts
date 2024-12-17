// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from 'express';
import dotenv from "dotenv";

dotenv.config();

// Create an Express application
const app = express();

// Specify the port number for the server
const port: number = Number(process.env.PORT) || 5050;

// Define a route for the root path ('/')
app.get('/', (req: Request, res: Response) => {
  // Send a response to the client
  res.send('Welcome to Valueye Technologies!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});