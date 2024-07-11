// var Username = document.getElementById('name').value;
// var email = document.getElementById('email').value;
// var messages = document.getElementById('messages').value;

// var messagesboy = "Name" + Username +
// "<br/> Email " + email +
// "<br/> Message " + messages;


function emailsend() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mohamedraiyan158@gmail.com",
        Password : "34A35181E5FA74D72247850AFB9DFC8AB66394C1A82C7547DFD5774A260A4EC9AA221ED3BC0698EA9AB1CF5EA45BD192",
        To : 'mohamedraiyan158@gmail.com',
        From :"mohamedraiyan158@gmail.com",
        Subject : "This is the subject",
        Body : "raiyan"
    }).then(
      message => alert(message)
    );
}
function emailsend() {
var username = document.getElementById('name').value
var email = document.getElementById('email').value
var message = document.getElementById('messages').value

    var parms = {
        email : email,
        name : username,
        message : message
    };
    emailjs.send('service_98c88bj','template_riev8ys',parms)
    .then(function(response) {
        console.log("success", response.status, response.text)
        window.alert("sent sucessfully");
    })
}