import {voiceText} from "./speech.js";

export function ACCORD() {

    const list = document.querySelectorAll('.accordion.error_article')
    list.forEach(item => {
        item.addEventListener('click', (e) => {

            if (item.classList.contains('active')) {
                item.classList.remove('active');
                const panel = item.nextElementSibling;
                panel.style.maxHeight = null;

                // item.scrollIntoView({
                //     behavior: "smooth",
                //     block: 'center'
                // })
                return
            }

            // list.forEach(el => {
            //     el.classList.remove('active');
            //     const panel = el.nextElementSibling;
            //     panel.style.maxHeight = null;
            //     // item.scrollIntoView({
            //     //     behavior: "smooth",
            //     //     block: 'center'
            //     // })
            // });

            item.classList.add('active');
            const panel = item.nextElementSibling;
            panel.style.maxHeight = panel.scrollHeight + "px";
            item.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })

            // ГОЛОС
            const errorNumber = item.firstElementChild.innerText;
            const errorName = item.lastElementChild.innerText
            voiceText('Ошибка ' + errorNumber + errorName);
         })
    })
}
