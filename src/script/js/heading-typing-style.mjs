
window.addEventListener("load", () => {
    
    function typing_effort(element, color) {

        let interval;
        let old_content = element.textContent;
        let old_color = window.getComputedStyle(element).color;

        element.addEventListener("mouseenter", () => {

            let content = [...element.textContent];
            let new_content = "";
            let word_count = 0;

            element.style.color = color;

            interval = setInterval(() => {
                element.textContent = new_content = new_content + content[word_count++];
                if (word_count === content.length) {
                    word_count = 0;
                    new_content = "";
                }

            }, 500);
        })

        element.addEventListener("mouseleave", () => {

            element.style.color = old_color;

            clearInterval(interval);
            element.textContent = old_content;
        });
    }

    let heading = document.querySelector("header h1");
    heading.textContent = "打字練習網站   ";

    typing_effort(heading, "thistle");
})