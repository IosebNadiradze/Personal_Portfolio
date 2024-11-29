const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const subject = document.querySelector("#subject");
const messg = document.querySelector("#message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Subject: ${subject.value}<br> Message: ${messg.value}<br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "iosebnadiradze23@gmail.com",
        Password : "636FC217ECDDFD2DF027180284F9ED5F100A",
        To : 'iosebnadiradze23@gmail.com',
        From : "iosebnadiradze23@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(message => {
        if (message === "OK") {
            Swal.fire({
                title: "Success!",
                text: "Your message sent successfully!",
                icon: "success"
            });

            // Clear input fields after successful submission
            fullName.value = "";
            email.value = "";
            phone.value = "";
            subject.value = "";
            messg.value = "";
        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();


    sendEmail();
});