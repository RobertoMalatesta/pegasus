var hostname = (process.env.NODE_ENV == "production") ? "http://107.170.247.198:80" : "http://127.0.0.1:3000";

window.onload = function() {

    var messages = [];
    var socket = io.connect(hostname);
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");

    socket.on('message', function (data) {
        if(data.message) {
            messages.push(data.message);
            var html = '';
            for(var i=0; i<messages.length; i++) {
                html += messages[i] + '<br />';
            }
            content.innerHTML = html;
        } else {
            console.log("There is a problem:", data);
        }
    });

    sendButton.onclick = function() {
        console.log("tet");
        var text = field.value;
        socket.emit('send', { message: text });
    };

}
