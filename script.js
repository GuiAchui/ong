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
// ATUALIZA A POSIÇÃO DA LUZ DE ACORDO COM O MOUSE
document.querySelectorAll('header, footer, .footer-eyrc, .block-dark, .bg-green').forEach(sec => {
    sec.addEventListener('mousemove', e => {
        const rect = sec.getBoundingClientRect();
        sec.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        sec.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const elementosVerdes = document.querySelectorAll('header, footer, .footer-eyrc, .block-dark, .bg-green');

    elementosVerdes.forEach(elemento => {
        // Ao mover o cursor sobre a área verde: segue o mouse e intensifica o brilho
        elemento.addEventListener('mousemove', e => {
            const rect = elemento.getBoundingClientRect();
            elemento.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            elemento.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            elemento.style.setProperty('--orb-opacity', '0.35'); // Brilho mais vivo durante a interação
        });

        // Ao tirar o cursor da área verde: retorna deslizando ao centro e fica translúcido
        elemento.addEventListener('mouseleave', () => {
            elemento.style.setProperty('--mouse-x', '50%');
            elemento.style.setProperty('--mouse-y', '50%');
            elemento.style.setProperty('--orb-opacity', '0.12'); // Suaviza o orbe em repouso
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Aplica nos blocos verdes (brilho mais vívido)
    const elementosVerdes = document.querySelectorAll('header, footer, .footer-eyrc, .block-dark, .bg-green');
    elementosVerdes.forEach(el => {
        el.addEventListener('mousemove', e => {
            const rect = el.getBoundingClientRect();
            el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            el.style.setProperty('--orb-opacity', '0.35');
        });

        el.addEventListener('mouseleave', () => {
            el.style.setProperty('--mouse-x', '50%');
            el.style.setProperty('--mouse-y', '50%');
            el.style.setProperty('--orb-opacity', '0.12');
        });
    });

    // 2. Aplica em TODAS as áreas claras do site todo (brilho suave)
    const elementosClaros = document.querySelectorAll('body, main, section:not(.bg-green):not(.block-dark):not(header):not(footer)');
    elementosClaros.forEach(el => {
        el.addEventListener('mousemove', e => {
            const rect = el.getBoundingClientRect();
            el.style.setProperty('--mouse-x-light', `${e.clientX - rect.left}px`);
            el.style.setProperty('--mouse-y-light', `${e.clientY - rect.top}px`);
            el.style.setProperty('--orb-opacity-light', '0.18');
        });

        el.addEventListener('mouseleave', () => {
            el.style.setProperty('--mouse-x-light', '50%');
            el.style.setProperty('--mouse-y-light', '50%');
            el.style.setProperty('--orb-opacity-light', '0.08');
        });
    });
});
// === ANIMAÇÃO DE CONTAGEM RÁPIDA DOS NÚMEROS ===
document.addEventListener('DOMContentLoaded', () => {
    const statNums = document.querySelectorAll('.stat-num');
    const duracaoAnimacao = 1800; // Tempo em milissegundos (1.8 segundos)

    const animarContador = (elemento) => {
        const alvo = +elemento.getAttribute('data-target');
        const prefixo = elemento.getAttribute('data-prefix') || '';
        const sufixo = elemento.getAttribute('data-suffix') || '';
        
        let valorAtual = 1;
        const incremento = alvo / (duracaoAnimacao / 16); // ~60 quadros por segundo

        const passo = () => {
            valorAtual += incremento;

            if (valorAtual < alvo) {
                elemento.innerText = `${prefixo}${Math.floor(valorAtual)}${sufixo}`;
                requestAnimationFrame(passo);
            } else {
                elemento.innerText = `${prefixo}${alvo}${sufixo}`;
            }
        };

        passo();
    };

    // Aciona a contagem assim que o bloco aparece na tela
    const observador = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animarContador(entry.target);
                observer.unobserve(entry.target); // Anima apenas na primeira rolagem
            }
        });
    }, { threshold: 0.3 });

    statNums.forEach(num => observador.observe(num));
});
// === MÁQUINA DE ESTADOS DO CHATBOT (ENVIO VIA WHATSAPP) ===
document.addEventListener('DOMContentLoaded', () => {
    const launcher = document.getElementById('chat-launcher');
    const chatBox = document.getElementById('chat-box');
    const closeBtn = document.getElementById('chat-close');
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');
    const messages = document.getElementById('chat-messages');

    if (!launcher) return;

    // Digite aqui o número oficial com DDD e código do país (55 + DDD + Número)
    const NUMERO_WHATSAPP_ONG = "5514998721836"; 

    let step = 0;
    const userData = { nome: '', telefone: '', cpf: '', duvida: '' };

    launcher.addEventListener('click', () => {
        chatBox.classList.toggle('card-oculto');
        if (!chatBox.classList.contains('card-oculto') && step === 0) {
            iniciarChat();
        }
    });

    closeBtn.addEventListener('click', () => chatBox.classList.add('card-oculto'));

    function addMsg(texto, isUser = false) {
        const div = document.createElement('div');
        div.className = `msg ${isUser ? 'msg-user' : 'msg-bot'}`;
        div.innerHTML = texto;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function iniciarChat() {
        step = 1;
        addMsg("Olá! Bem-vindo ao Lar da Criança Fermino Magnani. 💚");
        setTimeout(() => addMsg("Para começarmos o atendimento, qual é o seu **Nome completo**?"), 500);
    }

    function gerarRelatorioWhatsApp() {
        addMsg("⏳ Formatando suas informações para o WhatsApp...");

        // Formata a mensagem utilizando quebras de linha e marcações do WhatsApp
        const textoRelatorio = 
            `*NOVO CONTATO - LAR MAGNANI*\n\n` +
            `*Nome:* ${userData.nome}\n` +
            `*Telefone:* ${userData.telefone}\n` +
            `*CPF:* ${userData.cpf}\n` +
            `*Dúvida/Mensagem:* ${userData.duvida}`;

        const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP_ONG}?text=${encodeURIComponent(textoRelatorio)}`;

        setTimeout(() => {
            addMsg(`✅ Tudo pronto! Clique no botão abaixo para abrir seu WhatsApp e enviar os dados diretamente para a nossa equipe:`);
            addMsg(`<a href="${urlWhatsApp}" target="_blank" style="display:inline-block; background:#25D366; color:#fff; padding:0.6rem 1rem; border-radius:6px; font-weight:bold; text-decoration:none; margin-top:0.4rem;">📲 Iniciar Conversa no WhatsApp</a>`);
        }, 600);
    }

    function processarResposta() {
        const valor = input.value.trim();
        if (!valor) return;

        addMsg(valor, true);
        input.value = '';

        setTimeout(() => {
            if (step === 1) {
                userData.nome = valor;
                step = 2;
                addMsg(`Prazer, ${valor}! Por favor, digite seu **Telefone/WhatsApp** com DDD:`);
            } else if (step === 2) {
                userData.telefone = valor;
                step = 3;
                addMsg("Obrigado! Pode nos informar o seu **CPF** para registro de contato?");
            } else if (step === 3) {
                userData.cpf = valor;
                step = 4;
                addMsg("Perfeito! Como podemos te ajudar hoje? (Escreva sua dúvida, intenção de doação ou voluntariado):");
            } else if (step === 4) {
                userData.duvida = valor;
                step = 5;
                input.disabled = true;
                gerarRelatorioWhatsApp();
            }
        }, 600);
    }

    sendBtn.addEventListener('click', processarResposta);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') processarResposta();
    });
});
// Alterna a abertura do chat e o estado do botão redondo
launcher.addEventListener('click', () => {
    chatBox.classList.toggle('card-oculto');
    launcher.classList.toggle('active');

    // Troca o ícone de balão de fala para 'X' quando aberto
    const iconSpan = launcher.querySelector('.chat-icon');
    if (launcher.classList.contains('active')) {
        iconSpan.innerText = '✕';
    } else {
        iconSpan.innerText = '💬';
    }

    if (!chatBox.classList.contains('card-oculto') && step === 0) {
        iniciarChat();
    }
});

// Fecha pelo botão de fechar dentro do chat
closeBtn.addEventListener('click', () => {
    chatBox.classList.add('card-oculto');
    launcher.classList.remove('active');
    launcher.querySelector('.chat-icon').innerText = '💬';
});

// === COPIA E COLA DO CATÁLOGO PIX + TOAST ===
document.addEventListener('DOMContentLoaded', () => {
    const btnsPix = document.querySelectorAll('.btn-copiar-pix');
    const toast = document.getElementById('pix-toast');
    const toastTitle = document.getElementById('toast-title');
    let toastTimeout;

    if (!btnsPix.length || !toast) return;

    btnsPix.forEach(btn => {
        btn.addEventListener('click', () => {
            const codigoPix = btn.getAttribute('data-pix');
            const itemNome = btn.getAttribute('data-item');

            // Copia para a área de transferência
            navigator.clipboard.writeText(codigoPix).then(() => {
                // Atualiza o texto do Toast
                toastTitle.innerText = `Pix para "${itemNome}" Copiado!`;
                
                // Exibe o Toast
                toast.classList.add('ativo');

                // Esconde após 3.5 segundos
                clearTimeout(toastTimeout);
                toastTimeout = setTimeout(() => {
                    toast.classList.remove('ativo');
                }, 3500);
            }).catch(err => {
                alert('Ocorreu um erro ao copiar. Tente selecionar a chave manualmente.');
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const secoes = document.querySelectorAll('section');

    secoes.forEach(secao => {
        secao.addEventListener('mousemove', (e) => {
            const rect = secao.getBoundingClientRect();
            secao.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            secao.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });
});
