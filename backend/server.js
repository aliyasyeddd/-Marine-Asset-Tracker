// load environment variables from .env file at the start of the application. This allows you to access the variables defined in the .env file through process.env throughout your application.
const dotenv = require('dotenv')
//.env() will read the .env file, parse the contents, and assign it to process.env
dotenv.config()

const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

// Middleware to parse JSON bodies in incoming requests
app.use(express.json())

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Marine Asset Tracker API is running!')
})

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})