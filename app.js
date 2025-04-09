const express = require("express");
const app = express();
const port = 3000;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a simple route
app.get("/", (req, res) => {
  res.send(
    `<center style="font-weight;font-weight: 600;font-size: 2rem;font-family: cursive;">Hi from Node</center>`
  );
});
app.post("/", (req, res) => {
  console.log(req);
  res.send({ message: "post request on main recived" });
});
app.get("/about", (req, res) => {
  res.send(<center>About page</center>);
});
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
