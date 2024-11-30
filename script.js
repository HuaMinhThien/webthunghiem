document.querySelector(".login-btn").addEventListener("click", () => {
    document.getElementById("login-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("login-modal").style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("login-modal")) {
        document.getElementById("login-modal").style.display = "none";
    }
});
