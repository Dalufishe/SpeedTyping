
window.addEventListener("load", () => {
    let toTopButton = document.querySelector("#to-top");
    toTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
})