
// Variables
const openModals = document.querySelectorAll("[data-target]");
const closeModals = document.querySelectorAll(".modal__close");
const isVisible = "isVisible";

// OPEN MODALS

openModals.forEach((elem) => {
    elem.addEventListener('click', () => {
        const modalId = elem.dataset.target;
        document.querySelector(modalId).classList.add(isVisible);
    })
})

// ClOSE MODALS

// Click on the close icon

closeModals.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.parentElement.classList.remove(isVisible)
    })
}) 

// Close if click everything outside the modal

document.addEventListener('click', e => {
    if(e.target == document.querySelector(".modal.isVisible")) {
        document.querySelector(".modal.isVisible").classList.remove(isVisible);
    }
});

