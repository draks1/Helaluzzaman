  

  var sendMassage = ()=>{

    Email.send({
        Host : "smtp.gmail.com",
        Username : "abusayed321@yandex.com",
        Password : "1234567",
        To : 'abus04651@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact ",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

  }