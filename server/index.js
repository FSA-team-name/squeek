const express = require("express");
const app = express();
const PORT = 3002;
const path = require("path");



app.use(require("body-parser").json());
app.use(require("morgan")("dev"));


app.use((req, res, next) => {
  const auth = req.headers.authorization;

  const token = auth?.startsWith("Bearer ") ? auth.slice(7): null;

  try{
    const {id} = jwt.verify(token, process.env.JWT);
    req.user = id;
  }catch{
    req.user = null;
  }
  next();
})

app.use(express.static(path.join(__dirname, "..", "client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/dist/index.html"));
});


app.use("/api", require("./api"));
app.use("/auth", require("./auth"));



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
