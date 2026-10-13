(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('is-open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('is-open');
    }));
  }

  const config = window.PLAYBOOK_SITE_CONFIG || {};
  const purchaseUrl = typeof config.purchaseUrl === 'string' ? config.purchaseUrl.trim() : '';
  const safePurchaseUrl = /^https:\/\//i.test(purchaseUrl) ? purchaseUrl : '';
  document.querySelectorAll('[data-purchase-link]').forEach(link => {
    if (safePurchaseUrl) {
      link.href = safePurchaseUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.href = '#purchase';
    }
  });
  const note = document.querySelector('#purchase-note');
  if (note && safePurchaseUrl) note.hidden = true;
  const price = document.querySelector('#purchase-price');
  const priceLabel = typeof config.priceLabel === 'string' ? config.priceLabel.trim() : '';
  if (price && priceLabel) {
    price.textContent = priceLabel;
    price.hidden = false;
  }

  const copyButton = document.querySelector('#copy-prompt');
  const samplePrompt = document.querySelector('#sample-prompt');
  if (copyButton && samplePrompt) {
    copyButton.addEventListener('click', async () => {
      const original = copyButton.innerHTML;
      try {
        await navigator.clipboard.writeText(samplePrompt.textContent.trim());
        copyButton.textContent = 'Copied ✓';
      } catch {
        const range = document.createRange();
        range.selectNodeContents(samplePrompt);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        copyButton.textContent = 'Select & copy';
      }
      window.setTimeout(() => { copyButton.innerHTML = original; }, 1800);
    });
  }
})();
