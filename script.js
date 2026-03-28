// ===== GLOBAL =====
const music = document.getElementById("bgMusic");

// ===== OPEN ENVELOPE =====
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('opened');

    setTimeout(() => {
        document.querySelector('.hero').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');

        createFlowers();
        playMusic();
        initScrollAnimation();
    }, 1000);
}

// ===== FLOWERS (ULTRA SMOOTH) =====
function createFlowers() {
    const container = document.querySelector('.flowers');

    setInterval(() => {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.innerHTML = "🌸";

        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = (6 + Math.random() * 4) + "s";
        flower.style.fontSize = (15 + Math.random() * 20) + "px";

        container.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 10000);
    }, 400);
}

// ===== MUSIC CONTROL =====
function playMusic() {
    music.play().catch(() => {});
}

function toggleMusic() {
    const btn = document.querySelector('.music-btn.play');

    if (music.paused) {
        music.play();
        btn.innerHTML = "⏸";
    } else {
        music.pause();
        btn.innerHTML = "🎵";
    }
}

function stopMusic() {
    music.pause();
    music.currentTime = 0;

    document.querySelector('.music-btn.play').innerHTML = "🎵";
}

// ===== SCROLL ANIMATION (ULTRA SMOOTH) =====
function initScrollAnimation() {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(sec => observer.observe(sec));
}

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax');

    if (parallax) {
        let offset = window.scrollY;
        parallax.style.backgroundPositionY = offset * 0.5 + "px";
    }
});

// ===== WHATSAPP =====
function sendDirectWA() {
    const phone = "6287864871467";

    const name = new URLSearchParams(window.location.search).get("to") || "Tamu Undangan";

    const text =
`Assalamu alaikum 🙏

Saya ${name}
Konfirmasi: Hadir

Terima kasih 🙏`;

    const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
}