document.addEventListener("DOMContentLoaded", function () {
    
    // --- LÓGICA DO BOTÃO COPIAR PIX ---
    const btnCopiar = document.getElementById("btnCopiarPix");

    if (btnCopiar) {
        btnCopiar.addEventListener("click", function () {
            const chavePix = "56816325/0001-00"; 

            navigator.clipboard.writeText(chavePix)
                .then(() => {
                    const textoOriginal = btnCopiar.innerText;
                    btnCopiar.innerText = "✓ Copiado com Sucesso!";
                    btnCopiar.style.backgroundColor = "#2e7d32";

                    setTimeout(() => {
                        btnCopiar.innerText = textoOriginal;
                        btnCopiar.style.backgroundColor = "";
                    }, 2500);
                })
                .catch(err => console.error("Erro ao copiar PIX: ", err));
        });
    }

    // --- LÓGICA DO CARROSSEL DE FOTOS ---
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");
    
    let currentSlide = 0;
    let autoSlideInterval;

    function showSlide(index) {
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentSlide);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentSlide);
        });
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    if (btnNext && btnPrev) {
        btnNext.addEventListener("click", () => {
            nextSlide();
            resetAutoSlide();
        });

        btnPrev.addEventListener("click", () => {
            prevSlide();
            resetAutoSlide();
        });
    }

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const slideIndex = parseInt(e.target.getAttribute("data-slide"));
            showSlide(slideIndex);
            resetAutoSlide();
        });
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    if (slides.length > 0) {
        startAutoSlide();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // === LÓGICA DO CARROSSEL ===
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');

    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            // Ajusta o índice se ultrapassar o limite
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }

            // Remove a classe active de todos os slides e dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Adiciona active no slide e dot atuais
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startAutoPlay() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function resetAutoPlay() {
            clearInterval(slideInterval);
            startAutoPlay();
        }

        // Eventos nos botões Próximo e Anterior
        if (btnNext) {
            btnNext.addEventListener('click', () => {
                nextSlide();
                resetAutoPlay();
            });
        }

        if (btnPrev) {
            btnPrev.addEventListener('click', () => {
                prevSlide();
                resetAutoPlay();
            });
        }

        // Eventos nos Pontos (Dots)
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.target.getAttribute('data-slide'));
                showSlide(slideIndex);
                resetAutoPlay();
            });
        });

        // Inicia a navegação automática
        startAutoPlay();
    }

    // === LÓGICA COPIAR PIX ===
    const btnCopiarPix = document.getElementById('btnCopiarPix');
    if (btnCopiarPix) {
        btnCopiarPix.addEventListener('click', () => {
            const chave = "56816325/0001-00";
            navigator.clipboard.writeText(chave).then(() => {
                const originalText = btnCopiarPix.innerText;
                btnCopiarPix.innerText = "✓ Chave PIX Copiada!";
                btnCopiarPix.style.backgroundColor = "#2e7d32";
                btnCopiarPix.style.color = "#ffffff";

                setTimeout(() => {
                    btnCopiarPix.innerText = originalText;
                    btnCopiarPix.style.backgroundColor = "";
                    btnCopiarPix.style.color = "";
                }, 3000);
            });
        });
    }
});
// Torna o card do evento inteiro clicável
const heroCard = document.querySelector('.hero-right-card');
if (heroCard) {
    heroCard.addEventListener('click', () => {
        window.location.hash = 'eventos';
    });
}
// === ANIMAÇÃO DE ENTRADA AO ROLAR A TELA ===
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.3 });

    // Observa todos os elementos com a classe .reveal
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
// ENVIO DO FORMULÁRIO DE VOLUNTARIADO VIA WHATSAPP
document.addEventListener('DOMContentLoaded', () => {
    const formVoluntario = document.getElementById('form-voluntario');

    if (formVoluntario) {
        formVoluntario.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('vol-nome').value.trim();
            const telefone = document.getElementById('vol-telefone').value.trim();
            const area = document.getElementById('vol-area').value;
            const mensagem = document.getElementById('vol-mensagem').value.trim();

            // Monta o texto formatado para o WhatsApp
            let texto = `Olá! Meu nome é *${nome}* e gostaria de me candidatar como voluntário(a) no Lar da Criança.\n\n`;
            texto += `📌 *Área de Interesse:* ${area}\n`;
            texto += `📞 *Contato:* ${telefone}\n`;
            
            if (mensagem) {
                texto += `💬 *Disponibilidade/Obs:* ${mensagem}\n`;
            }

            const numeroWhatsApp = '5514998721836';
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

            // Abre o WhatsApp em uma nova aba
            window.open(url, '_blank');
        });
    }
});