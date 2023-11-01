import {ERRORS_DATA} from "./errors_data.js";

export function MODAL(){
    const modal = document.querySelector('.modal-container');
    const closeButton = document.querySelector('.close');
    const modalActions = document.querySelectorAll('.error_action');

    let isModalOpen = false;
    let pageYOffset = 0;

    const openModal = function() {
        pageYOffset = window.pageYOffset;
        modal.classList.add('is-open');
        isModalOpen = true;
    }

    const closeModal = function() {
        modal.classList.remove('is-open');
        isModalOpen = false;
    }

    const onScroll = function(e) {
        if (isModalOpen) {
            e.preventDefault();
            window.scrollTo(0, pageYOffset);
        }
    }

    modalActions.forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.innerHTML === 'НЕДОСТУПНО' || item.innerHTML === 'ЗАКРЫТЬ') return
            openModal()
            const errorArticle = item.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML;
            const errorDescription = ERRORS_DATA.find(error => error.error_number === errorArticle).error_actions;
            const errorDescriptionP = document.querySelector('.error_description');
            errorDescriptionP.innerHTML = errorDescription;
        });
    })

    document.addEventListener('scroll', onScroll);
    closeButton.addEventListener('click', closeModal);
}
