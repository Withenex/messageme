const request = new XMLHttpRequest();

url = 'https://mighty-coast-41688.herokuapp.com/api/message';

resetRequest();

request.onload = function (response)
{
    if(request.status >=200 && request.status <400)
    {
    button.setAttribute('class',"btn btn-outline-success");
    button.textContent = "Message Sent!";
    }
    else
    {
        button.setAttribute('class',"btn btn-outline-danger");
    button.textContent = "Couldn't send message";
    }
}

function resetRequest()
{
    request.open('post',url,true);
    button.setAttribute('class','btn btn-outline-primary');
    button.textContent = "Send Message"
}