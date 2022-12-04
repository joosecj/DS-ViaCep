import * as modalController from './modal-controller.js';

export function init() {
    const contactLink = document.querySelector(".contact-link");

    contactLink.addEventListener('click', handleContactLinkClick);
    console.log("Page controller iniado")
}

function handleContactLinkClick(event) {
    event.preventDefault();
    modalController.showModal();
}