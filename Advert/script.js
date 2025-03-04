document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully");
});

function showAlert() {
    alert("Thank you for your interest! Stay tuned for more updates.");
}

document.querySelector("form")?.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    this.reset();
});
