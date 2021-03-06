var ws=require("nodejs-websocket")

var PORT=3000

var clientCount=0;
var server=ws.createServer(function (conn){
    console.log("New connection")
    clientCount++
    conn.nickname='user'+clientCount
    broadcast(conn.nickname+' comes in') 
    conn.on("text",function(str){
        console.log("Received "+str)
    //    conn.sendText(str.toUpperCase()+"!!!")
    broadcast(conn.nickname+':  '+str)
    })
    conn.on("close",function (code,reson){
        console.log("Connection closed")
        broadcast(conn.nickname+':离开了  ')

    })
    conn.on("error",function(err){
        console.log("handle err");
        console.log(err)
    })
}).listen(PORT)
console.log("websocket server listening on port "+PORT)
    function broadcast(str){
        server.connections.forEach(function(connection){
            connection.sendText(str);
        })
    }