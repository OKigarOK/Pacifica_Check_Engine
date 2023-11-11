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
        item.addEventListener('click', () => {
            if (item.innerHTML === 'НЕДОСТУПНО' || item.innerHTML === 'ЗАКРЫТЬ') return
            openModal()
            const errorArticle = item.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML;
            const errorDescriptions = ERRORS_DATA.find(error => error.error_number === errorArticle).error_actions;
            const errorDescriptionP = document.querySelector('.error_description');
            // СТАРОЕ
            // errorDescriptionP.innerHTML = errorDescription;

            // НОВОЕ
            // ЦИКЛ ЭКШЕНОВ

            errorDescriptionP.innerHTML = '';

            for (let action of errorDescriptions) {
                const errorActionP = document.createElement('p');
                errorActionP.className = 'error_action';
                errorActionP.innerHTML = action; // error_action
                errorDescriptionP.append(errorActionP);
            }

            errorDescriptionP.scrollIntoView({ block: "start", behavior: "smooth" });

        });
    })

    document.addEventListener('scroll', onScroll);
    closeButton.addEventListener('click', closeModal);
}
