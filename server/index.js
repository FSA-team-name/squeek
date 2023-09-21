const express = require("express");
const app = express();
const PORT = 3002;
const http = require('http').Server(app);
const cors = require('cors');
const path = require("path");
const jwt = require("jsonwebtoken");

app.use(cors());

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  }
});

const users = [];

io.on('connection', (socket) => {
  console.log(`🐭: user ${socket.id} just connected!`);

  socket.on('message', (data) => {
    console.log(data)
    io.emit('messageResponse', data);
  });

  socket.on('disconnect', () => {
    console.log(`🐭: User ${socket.id} disconnected`);
  });
});

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



http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
