import io from "socket.io-client";
//Hopefully will make it so this will work when deployed to render
const URL = 'http://localhost:3002';

const socket = io.connect(URL);

export default socket;  