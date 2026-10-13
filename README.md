# The Practical AI Prompt Playbook — website

A self-contained, responsive landing page for the eBook. It uses static HTML/CSS/JavaScript and the existing eBook cover and launch artwork; no backend, paid dependency, login, or external font is required.

## Run a local preview

From this folder:

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open `http://localhost:4173` on the same machine. For this task, the website is also served through a temporary preview URL shared in the handoff.

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

- `index.html` — page content, accessible structure, and preview metadata
- `styles.css` — responsive brand styling and motion preferences
- `script.js` — mobile navigation, configured CTA, sample-prompt copy button
- `site-config.js` — editable checkout destination
- `assets/` — optimized eBook cover and promo art in WebP

## Before a public launch

1. Set `purchaseUrl` in `site-config.js` and test it.
2. Set the final domain in canonical/Open Graph URL and image metadata; the preview has no permanent domain, so those absolute URLs are intentionally omitted for now.
3. Add a domain-specific sitemap and robots policy if search indexing is desired.
4. Confirm the checkout, product terms, price, and delivery behavior on the destination page.
5. Keep the eBook PDF itself off this public static bundle unless it is meant to be freely downloadable.
