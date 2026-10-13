# The Practical AI Prompt Playbook — website

A self-contained, responsive landing page for the eBook. It uses static HTML/CSS/JavaScript and the existing eBook cover and launch artwork; no backend, paid dependency, login, or external font is required.

## Run a local preview

From this folder:

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open `http://localhost:4173` on the same machine.

## Live site (GitHub Pages)

In the repo go to **Settings → Pages**, choose branch `main` and folder `/ (root)`, then Save. The site goes live at `https://sadhik2104-cloud.github.io/AI-PROMPTS-/`.

## Add the real purchase/download destination

Open `site-config.js` and set:

```js
window.PLAYBOOK_SITE_CONFIG = {
  purchaseUrl: "https://your-real-checkout-or-download-page",
  priceLabel: ""
};
```

Use your actual HTTPS checkout/download page. The current empty value intentionally keeps the CTAs in preview mode; it does not pretend that checkout is connected. Do not put private API keys or payment credentials in this static site.

## Files

- `index.html` — page content, accessible structure, and share metadata
- `styles.css` — responsive brand styling and motion preferences
- `script.js` — mobile navigation, configured CTA, sample-prompt copy button
- `site-config.js` — editable checkout destination
- `ebook-cover.webp`, `launch-promo.webp` — optimized eBook cover and promo art (kept in the repo root, next to `index.html`)

## Before a public launch

1. Set `purchaseUrl` in `site-config.js` and test it.
2. Canonical/Open Graph URLs currently point to `https://sadhik2104-cloud.github.io/AI-PROMPTS-/`. If you later use a custom domain, update those URLs in `index.html`.
3. Add a domain-specific sitemap and robots policy if search indexing is desired.
4. Confirm the checkout, product terms, price, and delivery behavior on the destination page.
5. Keep the eBook PDF itself off this public static bundle unless it is meant to be freely downloadable.
