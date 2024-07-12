// var Username = document.getElementById('name').value;
// var email = document.getElementById('email').value;
// var messages = document.getElementById('messages').value;

// var messagesboy = "Name" + Username +
// "<br/> Email " + email +
// "<br/> Message " + message
// const form = document.querySelectorAll("form");
// const username = document.getElementById("name");
// const emails = document.getElementById("email");
// const message = document.getElementById("messages");

function emailsend() {
    // let boymsg = `nam: ${username.value}<br>mail:${emails.value}<br> message: ${message.value}`;
    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("messages").value;

    let messagebody = "Nam" + username +
     "<br/> Phon" + message +
     "<br/> mail" + email;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mohamedraiyan158@gmail.com",
        Password : "848042E7C8E5815E06D9EBC1C836411155DA",
        To : "mohamedraiyan158@gmail.com",
        From :"mohamedraiyan158@gmail.com",
        Subject : "This is the subject",
        Body : messagebody
    }).then(
      message => alert(message)
    );
}

// form.addEventListener("submit", () => {
//     emailsend()
// });

// function emailsend() {
// var username = document.getElementById('name').value
// var email = document.getElementById('email').value
// var message = document.getElementById('messages').value

//     var parms = {
//         email : email,
//         name : username,
//         message : message
//     };
//     emailjs.send('service_98c88bj','template_riev8ys',parms)
//     .then(function(response) {
//         console.log("success", response.status, response.text)
//         window.alert("sent sucessfully");
//     })
// }