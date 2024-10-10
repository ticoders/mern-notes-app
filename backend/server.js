const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');
const noteRoutes = require(path.join(__dirname, "routes", "noteRoutes"));

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON request bodies

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/notesApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// API routes
app.use("/notes", noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
