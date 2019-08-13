var ws=require("nodejs-websocket")

var PORT=3000

var clientCount=0;
var server=ws.createServer(function (conn){
    console.log("New connection")
    clientCount++
    conn.nickname='user'+clientCount
    var mes={}
    mes.type='enter'
    mes.data=conn.nickname+' comes in'
    broadcast(JSON.stringify(mes)); 
    conn.on("text",function(str){
        console.log("Received "+str)
    //    conn.sendText(str.toUpperCase()+"!!!")
        var mes={}
        mes.type='message'
        mes.data=conn.nickname+':  '+str
        broadcast(JSON.stringify(mes))
    })
    conn.on("close",function (code,reson){
        console.log("Connection closed")
        var mes={}
        mes.type='leave'
        mes.data=conn.nickname+':离开了  '
        broadcast(JSON.stringify(mes));
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