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
            panel.style.maxHeight = panel.scrollHeight + "px";
            console.log(panel.style.maxHeight);

            item.scrollIntoView({
                behavior: "smooth",
                block: 'nearest'
            })
        })
    })
}
