const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/articles");
const PORT = process.env.PORT || 3001;
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use("/api/", routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytsearch");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});