const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
  res.status(200).json({
    message: "hello",
  });
});

app.listen(3000, () => console.log("Server is up"));
