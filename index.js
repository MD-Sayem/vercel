const express = require("express");

const app = express();

app.get("/", (req, res) => {
  
    var fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            res.send("Sorry the file could not be sent");
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;