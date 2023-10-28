function ACCORD() {

    const list = document.querySelectorAll('.accordion.error_article')
    list.forEach(item => {
        item.addEventListener('click', (e) => {
            list.forEach(el => {
                el.classList.remove('active');
                const panel = el.nextElementSibling;
                panel.style.maxHeight = null;
            });
            item.classList.add('active');
            const panel = item.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        })
    })
}
