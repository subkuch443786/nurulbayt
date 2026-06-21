// ===== LOADER =====
window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("loader").classList.add("hidden");
    }, 1200);
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.12 });
reveals.forEach(el => revealObserver.observe(el));

// ===== BACK TO TOP =====
const backBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backBtn.style.display = "flex";
    } else {
        backBtn.style.display = "none";
    }
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", () => {
    document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// ===== MOBILE MENU =====
document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("navMenu").classList.toggle("open");
});

// ===== FAQ =====
function toggleFAQ(el) {
    el.classList.toggle("active");
}

// ===== COUNTER =====
const counters = document.querySelectorAll(".counter");
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target);
            let current = 0;
            const increment = Math.ceil(target / 50);
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    entry.target.textContent = target + (target > 100 ? '+' : '');
                    clearInterval(timer);
                } else {
                    entry.target.textContent = current;
                }
            }, 30);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
counters.forEach(el => counterObserver.observe(el));

// ===== DARK MODE =====
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("darkModeBtn");
    btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("darkModeBtn").textContent = "☀️";
}

// ===== SEARCH FUNCTION =====
document.getElementById("searchInput").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll(".article-card");
    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const desc = card.querySelector("p").textContent.toLowerCase();
        card.style.display = (title.includes(query) || desc.includes(query)) ? "block" : "none";
    });
});