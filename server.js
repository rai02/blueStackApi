const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Api hit");
});

app.use("/api", require("C:\\Users\\R_R\\Desktop\\api\\routes\\UserDetail"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
