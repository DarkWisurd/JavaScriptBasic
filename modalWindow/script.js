'use strict';
//defining classes
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
//functions to inpliment DRY 
function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden")
}
function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);//opning modal window
    btnCloseModal.addEventListener("click", closeModal);//closing modal window
    overlay.addEventListener("click", closeModal);//closing modal window
    //usnig Esc key to close modal window
    document.addEventListener("keydown", function (event) {
        console.log(event.key);
        if (event.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal()
            console.log("Esc was pressed");
        }
    })
}
