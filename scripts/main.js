
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


// Copy functionality for mail

const copyToClipBoard = () => {
    // Get the text
    let mailText = document.getElementById('mailID').textContent;
    console.log(mailText)
    let toolTip = document.getElementById('copyToolTip');
    let tooltipWrap = document.getElementById('toolTipWrapper');

     // Copy the text inside clipboard
    navigator.clipboard.writeText(mailText)
    .then(() => {
        tooltipWrap.className = "tooltip";
        toolTip.className = "toolTipText"; 
        toolTip.innerHTML = 'Copied!';
    })
    .catch(err => {
        toolTip.innerHTML = 'Error!';
    })

}

const toolTipOut = () => {
    let toolTip = document.getElementById('copyToolTip');
    let tooltipWrap = document.getElementById('toolTipWrapper');
    tooltipWrap.classList.remove("tooltip");
    toolTip.classList.remove("toolTipText");
    toolTip.style.display = 'none'; 
}



// undefined vanesa.perea@gmail.com
//-Añadir la funcionalidad de send
//-Añadir la funcionalidad de Telegram

