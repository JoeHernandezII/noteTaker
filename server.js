//Dependencies needed
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Creating exress server and port
const app = express();
const PORT = process.env.PORT || 1313;

// The data parsing with express app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Listening on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
