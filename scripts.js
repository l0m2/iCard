document.addEventListener("DOMContentLoaded", function () {
    const cvButton = document.querySelector(".cv-button");
    const cvModal = document.querySelector(".cv-modal");
    const closeModal = document.querySelector(".close-modal");

    cvButton.addEventListener("click", function () {
        cvModal.style.display = "flex";
    });

    closeModal.addEventListener("click", function () {
        cvModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === cvModal) {
            cvModal.style.display = "none";
        }
    });
});
