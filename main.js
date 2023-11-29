document.addEventListener("DOMContentLoaded", function () {
    const handleSubmitSecondForm = (event) => {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => console.log("Second form successfully submitted"))
            .catch((error) => alert(error));
    };

    document.querySelector(".netlify").addEventListener("submit", handleSubmitSecondForm);
});