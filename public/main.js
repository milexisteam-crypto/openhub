document.querySelector(".admin").addEventListener("click", () => {
    window.location.href = "login/admin"
})
document.querySelector(".switch").addEventListener("click", () => {
    document.querySelector(".switch").classList.toggle("turn")
    document.querySelector("body").classList.toggle("dark")
    document.querySelector(".scrskip").classList.toggle("dark")
})
document.querySelector(".logo").addEventListener("click", () => {
    document.querySelector(".home").scrollIntoView({
    behavior: "smooth"
})
})