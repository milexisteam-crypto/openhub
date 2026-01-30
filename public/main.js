document.querySelector(".admin").addEventListener("click", () => {
    window.location.href = "login/admin"
})
document.querySelector(".browse").addEventListener("click", () => {
    document.querySelector(".search").classList.remove("hide")
})
document.querySelector(".switch").addEventListener("click", () => {
    document.querySelector(".switch").classList.toggle("turn")
    document.querySelector("body").classList.toggle("dark")
})
document.querySelector(".logo").addEventListener("click", () => {
    document.querySelector(".home").scrollIntoView({
    behavior: "smooth"
})
})
document.querySelector(".about").addEventListener("click", () => {
    document.querySelector(".aboutsection").scrollIntoView({
    behavior: "smooth"
})
})