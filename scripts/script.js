document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form[name='form']");
    const emailInput = document.getElementById("email");
    const emailEmptyError = document.querySelector(".email-is-empty");
    const emailIncorrectError = document.querySelector(".email-not-correct");

    form.addEventListener("submit", function(event) {
        emailEmptyError.style.opacity = "0";
        emailEmptyError.style.visibility = "hidden";
        emailIncorrectError.style.opacity = "0";
        emailIncorrectError.style.visibility = "hidden";
        emailInput.parentElement.classList.remove("err");

        const emailValue = emailInput.value.trim();

        if (emailValue === "") {
            emailEmptyError.style.opacity = "1";
            emailEmptyError.style.visibility = "visible";
            emailInput.parentElement.classList.add("err");
            event.preventDefault();
        } else {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailPattern.test(emailValue)) {
                emailIncorrectError.style.opacity = "1";
                emailIncorrectError.style.visibility = "visible";
                emailInput.parentElement.classList.add("err");
                event.preventDefault();
            }
        }
    });

    emailInput.addEventListener("input", function() {
        emailEmptyError.style.opacity = "0";
        emailEmptyError.style.visibility = "hidden";
        emailIncorrectError.style.opacity = "0";
        emailIncorrectError.style.visibility = "hidden";
        emailInput.parentElement.classList.remove("err");
    });      
});
