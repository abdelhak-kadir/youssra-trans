const scriptURL = "https://script.google.com/macros/s/AKfycbzAlxIJ8Rptp3jEoy3U2CEqTV6IUDVEJgsQGhJD2AMl1G2e3ZyjRA9m5zDLsxlT9-Hpsw/exec";

document.getElementById('deliveryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        name: this.name.value,
        email: this.email.value,
        from: this.from.value,
        to: this.to.value,
        details: this.details.value
    };

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            alert("Your request has been submitted successfully!");
            this.reset();
        })
        .catch(error => {
            console.error("Error!", error.message);
            alert("There was an error. Please try again.");
        });
});
