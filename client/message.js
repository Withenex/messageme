const name = document.getElementById('name');
const message = document.getElementById('message');
const button = document.getElementById('button');

function sendMessage()
{
    request.setRequestHeader("Content-Type","application/json")
    var body = JSON.stringify({content: message.value,sender: name.value})
    console.log(Object.keys(JSON.parse(body)));
    console.log(body);
    request.send(body);

}