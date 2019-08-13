var ws=require("nodejs-websocket")
var PORT=3000
var server=ws.createServer(function (conn){
    console.log("New connection")
    conn.on("text",function(str){
        console.log("Received "+str)
        conn.sendText(str.toUpperCase()+"!!!")
    })
    conn.on("close",function (code,reson){
        console.log("Connection closed")
    })
    conn.on("error",function(err){
        console.log("handle err");
        console.log(err)
    })
}).listen(PORT)
console.log("websocket server listening on port "+PORT)