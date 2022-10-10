const body = document.body
const themeBtn = document.querySelector("#theme-btn")

// TOGGLE LIGHT OR DARKMODE
themeBtn.addEventListener("click", () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        body.classList.toggle("lightmode")
    }else {
        body.classList.toggle("darkmode")
    }
})