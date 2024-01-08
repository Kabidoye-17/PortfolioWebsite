const form = document.querySelector('form');
function sendEmail(){
  const name = document.getElementById("namebar").value;
  const email =  document.getElementById("emailbar").value;
  const message = document.getElementById("messagebox").value;

  const body = `Name: ${name} \nEmail: ${email} \Message: "${message}"`;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "Kabidoye17@outlook.com",
    Password : "64B7D68CA042E02633578B9C71E99E3E460E",
    To : 'Kabidoye17@outlook.com',
    From : "kellyportfoliowebsite@gmail.com",
    Subject : "New message from contact form",
    Body: body,
  }).then(
    message => alert(message)
  );
}
form.addEventListener("submit", (e)=> {
  e.preventDefault();
  sendEmail();
})
