document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const opened = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(opened));
      toggle.textContent = opened ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    }));
  }
  const copyButton = document.getElementById('copyPix');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const key = document.getElementById('pixKey').textContent.trim();
      const feedback = document.getElementById('copyFeedback');
      try {
        await navigator.clipboard.writeText(key);
        feedback.textContent = 'Chave PIX copiada!';
        copyButton.textContent = 'Copiado!';
      } catch {
        feedback.textContent = 'Não foi possível copiar automaticamente. Selecione a chave acima.';
      }
    });
  }
});