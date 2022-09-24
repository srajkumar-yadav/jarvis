var server = require('ws').Server;
var s = new server({ port: 5001 });

s.on('connection', function (ws) {
    ws.on('message', function (id, data) {
        s.clients.forEach(function e(client) {
            client.send(`${id} ${data}`)
        });
    });
});