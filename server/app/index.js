const express = require("express");

const app = express();
console.log(app);

app.get("/hello", (req, res) => {
  res.send("hello world");
});
app.get("/login", (req, res) => {
  // ?
  res.send("helloss world");
});
app.get("/logout", (req, res) => {
  res.send({
    id: 1
  });
});
app.listen(3000, () => {
  console.log(`serve is running on`);
});
