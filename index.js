

const express=require('express');
const path=require('path');
 PORT=require('dotenv').config();
const app =express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);
//path public
const public=path.resolve(__dirname,'public');
app.use(express.static(public));




server.listen(process.env.PORT,(err)=>{
if(err)throw new Error(err)
console.log("Servidor conectado en puerto ",PORT);
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');

      
    });
    socket.on('mensaje',(payload ) =>{
        console.log(payload)
    });
    io.emit('mensaje',{admin:"welcome mando nuevo mensaje"})
  
    ;
  });
  
  
  