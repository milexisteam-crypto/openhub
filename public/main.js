    if (localStorage.getItem("theme") == null) {
        localStorage.setItem("theme", "dark")
    }
document.querySelector(".admin").addEventListener("click", () => {
    window.location.href = "login/admin"
})
document.querySelector(".switch").addEventListener("click", () => {
    document.querySelector(".switch").classList.toggle("turn")
    const theme = document.querySelector("body").classList.toggle("dark") ? "dark" : "light"
    document.querySelector(".scrskip").classList.toggle("dark")
    localStorage.setItem("theme", theme)
})
document.querySelector(".logo").addEventListener("click", () => {
    document.querySelector(".home").scrollIntoView({
    behavior: "smooth"
})
})
document.querySelector(".scrskip").addEventListener("click", () => {
    document.querySelector(".screrr").classList.toggle("hide")
})

    if (localStorage.getItem("theme") == "light") {
            document.querySelector(".switch").classList.toggle("turn")
    document.querySelector("body").classList.toggle("dark")
    document.querySelector(".scrskip").classList.toggle("dark")
    localStorage.setItem("theme", theme)
    }
if(window.matchMedia("(prefers-color-scheme: light)").matches) {
                document.querySelector(".switch").classList.toggle("turn")
    document.querySelector("body").classList.toggle("dark")
    document.querySelector(".scrskip").classList.toggle("dark")
    localStorage.setItem("theme", theme)
}