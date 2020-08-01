const name = document.getElementById('name');
const message = document.getElementById('message');
const button = document.getElementById('button');

function sendMessage()
{
    var body = `{"content":"${message.value}","sender":"${name.value}"}`
    console.log(body);
    request.send(body);

}