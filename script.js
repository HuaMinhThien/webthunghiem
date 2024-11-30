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

// GSAP: Hiệu ứng cho Hero Section
gsap.from(".hero h1", { 
    opacity: 0, 
    y: -50, 
    duration: 1 
});

gsap.from(".hero .cta-btn", { 
    opacity: 0, 
    scale: 0.8, 
    duration: 1, 
    delay: 0.5 
});

// GSAP: Hiệu ứng cuộn cho sản phẩm
gsap.utils.toArray(".product-card").forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.3,
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
        },
    });
});

// Hiệu ứng cho header khi cuộn
gsap.to("header", {
    backgroundColor: "#375534",
    duration: 0.5,
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=100",
        toggleActions: "play none none reverse",
    },
});

// GSAP: Hiệu ứng cho Modal
document.querySelector(".login-btn").addEventListener("click", () => {
    const modal = document.getElementById("login-modal");
    modal.style.display = "flex";
    gsap.fromTo(".modal-content", 
        { opacity: 0, scale: 0.5 }, 
        { opacity: 1, scale: 1, duration: 0.5 }
    );
});

document.querySelector(".close").addEventListener("click", () => {
    const modal = document.getElementById("login-modal");
    gsap.to(".modal-content", {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        onComplete: () => {
            modal.style.display = "none";
        },
    });
});

window.addEventListener("click", (e) => {
    const modal = document.getElementById("login-modal");
    if (e.target === modal) {
        gsap.to(".modal-content", {
            opacity: 0,
            scale: 0.5,
            duration: 0.5,
            onComplete: () => {
                modal.style.display = "none";
            },
        });
    }
});
