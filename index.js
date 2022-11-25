const express = require("express");

const app = express();

app.get("/", (req, res) => {
  
	res.send("<h1>vercel is only for serverless deployment</h1>");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;