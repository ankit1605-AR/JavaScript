/* ------------------------------------------------------------------
   Design tokens
   Palette pulled from a 1958 mail-order catalog: aged newsprint paper,
   oxblood ink, mustard price-tag stamp, forest green trim.
------------------------------------------------------------------- */
:root {
  --paper: #f1e9d8;
  --paper-dark: #e4d6b8;
  --paper-darker: #d8c6a1;
  --ink: #2b2521;
  --ink-soft: #55483c;
  --oxblood: #7a2e2e;
  --oxblood-dark: #5e2222;
  --mustard: #c98a2c;
  --mustard-dark: #a06e1f;
  --forest: #445939;
  --stamp-blue: #4c6b73;
  --error: #a12c2c;
  --error-bg: #f6dede;

  --font-display: 'Fraunces', 'Georgia', serif;
  --font-body: 'Arvo', 'Georgia', serif;
  --font-utility: 'Special Elite', 'Courier New', monospace;

  --radius-sm: 3px;
  --radius-md: 6px;
  --shadow-hard: 4px 4px 0 var(--ink);
  --shadow-hard-sm: 2px 2px 0 var(--ink);

  --focus-ring: 3px solid var(--stamp-blue);
  --focus-ring-offset: 2px;
}

/* ------------------------------------------------------------------
   Reset & base
------------------------------------------------------------------- */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3 {
  font-family: var(--font-display);
  margin: 0;
  color: var(--ink);
}

p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
}

button {
  font-family: inherit;
}

input {
  font-family: inherit;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Visible, high-contrast focus states everywhere, keyboard or mouse. */
a:focus-visible,
button:focus-visible,
input:focus-visible,
label:focus-within .swatch__chip,
label:focus-within .size-chip {
  outline: var(--focus-ring);
  outline-offset: var(--focus-ring-offset);
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ------------------------------------------------------------------
   Grain overlay (signature texture)
------------------------------------------------------------------- */
.grain-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 999;
}

/* ------------------------------------------------------------------
   Page shell
------------------------------------------------------------------- */
.page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 15% 10%, rgba(122, 46, 46, 0.05), transparent 45%),
    radial-gradient(circle at 85% 90%, rgba(68, 89, 57, 0.06), transparent 45%),
    var(--paper);
  padding: 32px 20px 64px;
}

.page__content {
  max-width: 1040px;
  margin: 0 auto;
}

.loading-state {
  font-family: var(--font-utility);
  text-align: center;
  padding-top: 120px;
  color: var(--ink-soft);
  letter-spacing: 0.04em;
}

.masthead {
  max-width: 1040px;
  margin: 0 auto 28px;
  text-align: center;
  border-bottom: 3px double var(--ink);
  padding-bottom: 18px;
}

.masthead__eyebrow {
  font-family: var(--font-utility);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--oxblood);
  margin-bottom: 10px;
}

.masthead__row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
}

.masthead__title-link {
  color: inherit;
  text-decoration: none;
}

.masthead__title {
  font-size: clamp(1.9rem, 4vw, 2.75rem);
  font-weight: 600;
  letter-spacing: 0.01em;
}

.masthead__title-link:hover .masthead__title {
  color: var(--oxblood);
}

.cart-link {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-utility);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--ink);
  text-decoration: none;
  border: 2px solid var(--ink);
  border-radius: var(--radius-sm);
  padding: 7px 12px;
  background: var(--paper);
  transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
}

.cart-link:hover {
  transform: translateY(calc(-50% - 2px));
  box-shadow: var(--shadow-hard-sm);
  background: var(--paper-dark);
}

.cart-link:active {
  transform: translateY(-50%);
  box-shadow: none;
}

.cart-link__icon {
  font-size: 1rem;
}

.cart-link__count {
  background: var(--oxblood);
  color: var(--paper);
  border-radius: 999px;
  min-width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  padding: 0 4px;
}

@media (max-width: 640px) {
  .masthead__row {
    flex-direction: column;
    gap: 10px;
  }

  .cart-link {
    position: static;
    transform: none;
  }

  .cart-link:hover {
    transform: translateY(-2px);
  }
}

.demo-banner {
  max-width: 1040px;
  margin: 0 auto 20px;
  padding: 10px 16px;
  background: var(--paper-dark);
  border: 1px dashed var(--ink-soft);
  border-radius: var(--radius-sm);
  font-family: var(--font-utility);
  font-size: 0.82rem;
  color: var(--ink-soft);
  text-align: center;
}

/* ------------------------------------------------------------------
   Product layout
------------------------------------------------------------------- */
.product-layout {
  max-width: 1040px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 40px;
  align-items: start;
}

@media (max-width: 800px) {
  .product-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

/* ------------------------------------------------------------------
   Gallery
------------------------------------------------------------------- */
.gallery__stage {
  position: relative;
  border: 2px solid var(--ink);
  background: var(--paper-dark);
  box-shadow: var(--shadow-hard);
  padding: 8px;
}

.gallery__plate {
  aspect-ratio: 4 / 5;
  border: 1px dashed rgba(43, 37, 33, 0.4);
  display: flex;
  align-items: flex-end;
  padding: 16px;
  color: var(--paper);
}

.gallery__plate-label {
  font-family: var(--font-utility);
  font-size: 0.82rem;
  background: rgba(43, 37, 33, 0.55);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
}

.gallery__corner {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 34px;
  height: 34px;
  background: var(--mustard);
  border: 2px solid var(--ink);
  clip-path: polygon(100% 0, 0 0, 100% 100%);
}

.gallery__thumbs {
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.gallery__thumb {
  display: flex;
  align-items: center;
  gap: 6px;
  border: 2px solid var(--ink);
  background: var(--paper);
  padding: 6px 10px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-family: var(--font-utility);
  font-size: 0.8rem;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

.gallery__thumb:hover {
  transform: translate(-1px, -1px);
  box-shadow: var(--shadow-hard-sm);
}

.gallery__thumb:active {
  transform: translate(0, 0);
  box-shadow: none;
}

.gallery__thumb.is-active {
  background: var(--ink);
  color: var(--paper);
}

.gallery__thumb-swatch {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
}

/* ------------------------------------------------------------------
   Product details column
------------------------------------------------------------------- */
.product-details {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.product-details__tagline {
  font-family: var(--font-utility);
  color: var(--forest);
  font-size: 0.85rem;
  letter-spacing: 0.03em;
}

.product-details__title {
  font-size: clamp(1.6rem, 3vw, 2.1rem);
}

.price-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.price-row__current {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--oxblood);
}

.price-row__compare {
  text-decoration: line-through;
  color: var(--ink-soft);
  font-size: 1rem;
}

.product-details__description {
  color: var(--ink-soft);
}

.detail-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 4px 0 8px;
}

.detail-list li {
  padding-left: 20px;
  position: relative;
  font-size: 0.92rem;
  color: var(--ink-soft);
}

.detail-list li::before {
  content: '\2022';
  position: absolute;
  left: 4px;
  color: var(--oxblood);
  font-weight: 700;
}

/* ------------------------------------------------------------------
   Stamp badge (signature element)
------------------------------------------------------------------- */
.stamp-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transform: rotate(-3deg);
  align-self: flex-start;
  color: var(--forest);
  border: 2px solid var(--forest);
  border-radius: 999px;
  padding: 4px 12px 4px 6px;
  width: fit-content;
}

.stamp-badge__ring {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: var(--forest);
  stroke-width: 4;
}

.stamp-badge__text {
  font-family: var(--font-utility);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* ------------------------------------------------------------------
   Option groups (shared fieldset styling)
------------------------------------------------------------------- */
.options-panel {
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-top: 1px dashed var(--ink-soft);
  border-bottom: 1px dashed var(--ink-soft);
  padding: 18px 0;
  margin: 6px 0;
}

.option-group {
  border: none;
  margin: 0;
  padding: 0;
}

.option-group__legend {
  font-family: var(--font-utility);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--ink);
  padding: 0;
  margin-bottom: 8px;
  display: block;
}

.option-group__value {
  text-transform: none;
  letter-spacing: 0;
  color: var(--ink-soft);
  font-family: var(--font-body);
}

.option-group__hint {
  font-size: 0.78rem;
  color: var(--ink-soft);
  margin-top: 6px;
}

/* Color swatches */
.swatch-row {
  display: flex;
  gap: 10px;
}

.swatch {
  position: relative;
  cursor: pointer;
  display: inline-flex;
}

.swatch__input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
}

.swatch__chip {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid var(--ink);
  display: block;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

.swatch:hover .swatch__chip {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hard-sm);
}

.swatch__input:checked + .swatch__chip {
  box-shadow: 0 0 0 3px var(--paper), 0 0 0 5px var(--ink);
}

.swatch__input:focus-visible + .swatch__chip {
  outline: var(--focus-ring);
  outline-offset: var(--focus-ring-offset);
}

/* Size chips */
.size-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.size-chip {
  position: relative;
  border: 2px solid var(--ink);
  background: var(--paper);
  min-width: 46px;
  padding: 8px 10px;
  text-align: center;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-family: var(--font-utility);
  font-size: 0.85rem;
  transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
}

.size-chip__input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
}

.size-chip:hover {
  transform: translate(-1px, -1px);
  box-shadow: var(--shadow-hard-sm);
}

.size-chip.is-selected {
  background: var(--ink);
  color: var(--paper);
}

.size-chip.is-disabled {
  color: var(--ink-soft);
  text-decoration: line-through;
  cursor: not-allowed;
  opacity: 0.55;
}

.size-chip.is-disabled:hover {
  transform: none;
  box-shadow: none;
}

.size-chip__input:focus-visible {
  outline: none;
}

.size-chip:has(.size-chip__input:focus-visible) {
  outline: var(--focus-ring);
  outline-offset: var(--focus-ring-offset);
}

/* Quantity stepper */
.quantity-stepper__control {
  display: inline-flex;
  align-items: stretch;
  border: 2px solid var(--ink);
  border-radius: var(--radius-sm);
  overflow: hidden;
  width: fit-content;
}

.quantity-stepper__button {
  background: var(--paper-dark);
  border: none;
  width: 36px;
  font-size: 1.1rem;
  cursor: pointer;
  color: var(--ink);
}

.quantity-stepper__button:hover:not(:disabled) {
  background: var(--mustard);
}

.quantity-stepper__button:active:not(:disabled) {
  background: var(--mustard-dark);
}

.quantity-stepper__button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.quantity-stepper__input {
  width: 46px;
  text-align: center;
  border: none;
  border-left: 2px solid var(--ink);
  border-right: 2px solid var(--ink);
  background: var(--paper);
  font-size: 0.95rem;
  color: var(--ink);
  -moz-appearance: textfield;
}

.quantity-stepper__input::-webkit-outer-spin-button,
.quantity-stepper__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* ------------------------------------------------------------------
   Buttons
------------------------------------------------------------------- */
.btn {
  font-family: var(--font-utility);
  font-size: 0.92rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding: 14px 20px;
  border-radius: var(--radius-sm);
  border: 2px solid var(--ink);
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
}

.btn--block {
  width: 100%;
}

.btn--primary {
  background: var(--oxblood);
  color: var(--paper);
  box-shadow: var(--shadow-hard);
}

.btn--primary:hover:not(:disabled) {
  background: var(--oxblood-dark);
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--ink);
}

.btn--primary:active:not(:disabled) {
  transform: translate(0, 0);
  box-shadow: var(--shadow-hard-sm);
}

.btn--primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  box-shadow: none;
}

.btn--ghost {
  background: transparent;
  color: var(--ink);
  margin-top: 10px;
}

.btn--ghost:hover {
  background: var(--paper-dark);
}

.btn--ghost:active {
  background: var(--paper-darker);
}

/* ------------------------------------------------------------------
   Checkout / order coupon form
------------------------------------------------------------------- */
.checkout-panel {
  margin-top: 4px;
}

.order-form {
  position: relative;
  border: 2px solid var(--ink);
  background: var(--paper-dark);
  padding: 22px 20px 20px;
  box-shadow: var(--shadow-hard);
}

.order-form__perforation {
  position: absolute;
  top: -9px;
  left: 12px;
  right: 12px;
  height: 16px;
  background-image: radial-gradient(circle, var(--paper) 4px, transparent 4.5px);
  background-size: 18px 16px;
  background-repeat: repeat-x;
  background-position: left center;
}

.order-form__eyebrow {
  font-family: var(--font-utility);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--oxblood);
  margin-bottom: 14px;
}

.form-field {
  margin-bottom: 14px;
}

.form-field__label {
  display: block;
  font-family: var(--font-utility);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 5px;
  color: var(--ink);
}

.form-field__input {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid var(--ink);
  border-radius: var(--radius-sm);
  background: var(--paper);
  font-size: 0.95rem;
  color: var(--ink);
}

.form-field__input:hover {
  border-color: var(--oxblood);
}

.form-field__input.has-error {
  border-color: var(--error);
  background: var(--error-bg);
}

.field-error {
  color: var(--error);
  font-size: 0.78rem;
  margin-top: 5px;
  font-family: var(--font-utility);
}

.field-error--form {
  margin-bottom: 14px;
}

/* ------------------------------------------------------------------
   Order confirmation
------------------------------------------------------------------- */
.order-confirmation {
  border: 2px solid var(--forest);
  background: var(--paper-dark);
  padding: 24px 20px;
  text-align: center;
  box-shadow: var(--shadow-hard);
}

.order-confirmation__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border: 3px solid var(--forest);
  border-radius: 50%;
  color: var(--forest);
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.order-confirmation__title {
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.order-confirmation__body {
  color: var(--ink-soft);
  font-size: 0.92rem;
}

/* ------------------------------------------------------------------
   Footer
------------------------------------------------------------------- */
.site-footer {
  max-width: 1040px;
  margin: 48px auto 0;
  text-align: center;
  font-family: var(--font-utility);
  font-size: 0.75rem;
  color: var(--ink-soft);
  border-top: 1px dashed var(--ink-soft);
  padding-top: 16px;
}

/* ------------------------------------------------------------------
   Shared page bits: back link, page title, empty state
------------------------------------------------------------------- */
.back-link {
  display: inline-block;
  font-family: var(--font-utility);
  font-size: 0.82rem;
  color: var(--ink-soft);
  text-decoration: none;
  margin-bottom: 18px;
}

.back-link:hover {
  color: var(--oxblood);
  text-decoration: underline;
}

.page-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 20px;
  border-bottom: 1px dashed var(--ink-soft);
  padding-bottom: 12px;
}

.empty-state {
  max-width: 480px;
  margin: 60px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
}

.empty-state h2 {
  font-size: 1.4rem;
}

.empty-state p {
  color: var(--ink-soft);
}

/* ------------------------------------------------------------------
   Catalog page
------------------------------------------------------------------- */
.catalog-intro {
  text-align: center;
  margin-bottom: 28px;
}

.catalog-intro__title {
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  margin-bottom: 6px;
}

.catalog-intro__body {
  color: var(--ink-soft);
  max-width: 480px;
  margin: 0 auto;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

@media (max-width: 800px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}

.product-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
  color: var(--ink);
  border: 2px solid var(--ink);
  background: var(--paper);
  padding: 10px;
  border-radius: var(--radius-sm);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

.product-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-hard);
}

.product-card:active {
  transform: translate(0, 0);
  box-shadow: none;
}

.product-card__plate {
  aspect-ratio: 4 / 5;
  border: 1px dashed rgba(43, 37, 33, 0.4);
  position: relative;
  margin-bottom: 6px;
}

.product-card__sale-flag {
  position: absolute;
  top: 8px;
  left: -6px;
  background: var(--mustard);
  color: var(--ink);
  font-family: var(--font-utility);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 3px 10px;
  transform: rotate(-4deg);
  border: 1px solid var(--ink);
}

.product-card__category {
  font-family: var(--font-utility);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--forest);
}

.product-card__name {
  font-size: 1rem;
  line-height: 1.3;
}

.product-card__price-row {
  display: flex;
  gap: 8px;
  align-items: baseline;
}

.product-card__price {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--oxblood);
}

.product-card__compare {
  text-decoration: line-through;
  color: var(--ink-soft);
  font-size: 0.85rem;
}

/* ------------------------------------------------------------------
   Add-to-bag confirmation (product detail page)
------------------------------------------------------------------- */
.added-confirmation {
  border: 2px solid var(--forest);
  background: var(--paper-dark);
  padding: 16px;
  border-radius: var(--radius-sm);
}

.added-confirmation__actions {
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.added-confirmation__actions .btn {
  flex: 1;
  min-width: 140px;
}

/* ------------------------------------------------------------------
   Cart page
------------------------------------------------------------------- */
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
}

.cart-line {
  display: grid;
  grid-template-columns: 44px 1fr auto auto;
  gap: 14px;
  align-items: center;
  border: 2px solid var(--ink);
  background: var(--paper);
  padding: 14px;
  border-radius: var(--radius-sm);
}

.cart-line__swatch {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--ink);
}

.cart-line__name {
  font-family: var(--font-display);
  font-weight: 600;
}

.cart-line__variant {
  font-size: 0.82rem;
  color: var(--ink-soft);
  margin-top: 2px;
}

.cart-line__price {
  font-size: 0.78rem;
  color: var(--ink-soft);
  margin-top: 2px;
  font-family: var(--font-utility);
}

.cart-line__controls {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.cart-line__remove {
  background: none;
  border: none;
  color: var(--oxblood);
  font-family: var(--font-utility);
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;
  padding: 2px;
}

.cart-line__remove:hover {
  text-decoration: underline;
}

.cart-line__subtotal {
  font-family: var(--font-display);
  font-weight: 700;
  min-width: 70px;
  text-align: right;
}

@media (max-width: 640px) {
  .cart-line {
    grid-template-columns: 40px 1fr;
    grid-template-areas:
      'swatch info'
      'controls controls'
      'subtotal subtotal';
    row-gap: 10px;
  }

  .cart-line__swatch {
    grid-area: swatch;
  }

  .cart-line__info {
    grid-area: info;
  }

  .cart-line__controls {
    grid-area: controls;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .cart-line__subtotal {
    grid-area: subtotal;
    text-align: left;
  }
}

.cart-summary {
  border: 2px solid var(--ink);
  background: var(--paper-dark);
  padding: 18px;
  box-shadow: var(--shadow-hard);
  max-width: 360px;
  margin-left: auto;
}

.cart-summary__row {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.cart-summary__note {
  font-size: 0.78rem;
  color: var(--ink-soft);
  margin-bottom: 14px;
}

.cart-summary .btn {
  margin-top: 8px;
}

@media (max-width: 640px) {
  .cart-summary {
    max-width: none;
  }
}

/* ------------------------------------------------------------------
   Checkout page
------------------------------------------------------------------- */
.checkout-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 32px;
  align-items: start;
}

@media (max-width: 800px) {
  .checkout-layout {
    grid-template-columns: 1fr;
  }
}

.order-summary {
  border: 2px solid var(--ink);
  background: var(--paper);
  padding: 18px;
  border-radius: var(--radius-sm);
}

.order-summary__eyebrow {
  font-family: var(--font-utility);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--oxblood);
  margin-bottom: 12px;
}

.order-summary__row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.88rem;
  padding: 8px 0;
  border-bottom: 1px dashed var(--paper-darker);
}

.order-summary__variant {
  color: var(--ink-soft);
}

.order-summary__row--total {
  border-bottom: none;
  border-top: 2px solid var(--ink);
  margin-top: 6px;
  padding-top: 12px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
}

/* ------------------------------------------------------------------
   Small-screen tweaks
------------------------------------------------------------------- */
@media (max-width: 480px) {
  .page {
    padding: 20px 14px 48px;
  }

  .btn {
    font-size: 0.85rem;
  }

  .swatch__chip {
    width: 30px;
    height: 30px;
  }

  .size-chip {
    min-width: 40px;
    padding: 7px 8px;
  }
}
