export function ACCORD() {

    const list = document.querySelectorAll('.accordion.error_article')
    list.forEach(item => {
        item.addEventListener('click', (e) => {

            if (item.classList.contains('active')) {
                item.classList.remove('active');
                const panel = item.nextElementSibling;
                panel.style.maxHeight = null;
                return
            }

            list.forEach(el => {
                el.classList.remove('active');
                const panel = el.nextElementSibling;
                panel.style.maxHeight = null;
            });

            item.classList.add('active');
            const panel = item.nextElementSibling;
            panel.style.maxHeight = panel.scrollHeight + "px";
            item.scrollIntoView({
                behavior: "smooth",
                block: 'nearest'
            })
        })
    })
}

