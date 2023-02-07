var btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var body = "name:" + name + "<br> email: " + email + "<br> message :" + message;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "1998arun@gmail.com",
    Password: "D9316ABBA5DD64DEAF90216B50E5512AAC4E",
    To: "arunmhere98@gmail.com",
    From: "1998viratarun@gmail.com",
    Subject: " subject",
    Body: body,
  }).then(message => alert("submited"));
});


function navbar() {
  document.getElementById('navbar').style.display = "block";
  document.getElementById('menu-bar').style.display = "none";
  document.getElementById('x-bar').style.display = "block"
}
function closeFunction() {
  document.getElementById('navbar').style.display="none"
  document.getElementById('x-bar').style.display = "none"
  document.getElementById('menu-bar').style.display = "block";

}