function ACCORD() {

    const list = document.querySelectorAll('.accordion.error_article')
    list.forEach(item => {
        item.addEventListener('click', (e) => {
            list.forEach(el => {
                el.classList.remove('active');
                const panel = el.nextElementSibling;
                //
                // if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                // } else {
                //     panel.style.maxHeight = panel.scrollHeight + "px";
                // }
            });
            item.classList.add('active');
            const panel = item.nextElementSibling;
            // console.log(item);
            // console.log(panel);
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        })
    })

    // const acc = document.getElementsByClassName("accordion");
    // for (let i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function() {
    //
    //         this.classList.toggle("active");
    //
    //         const panel = this.nextElementSibling;
    //         if (panel.style.maxHeight) {
    //             panel.style.maxHeight = null;
    //         } else {
    //             panel.style.maxHeight = panel.scrollHeight + "px";
    //         }
    //
    //     });
    // }
}
