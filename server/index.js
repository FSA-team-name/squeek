const express = require("express");
const app = express();
const PORT = 3002;



app.use(require("body-parser").json());
app.use(require("morgan")("dev"));



app.use("/api", require("./api"));
app.use("/auth", require("./auth"));



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
