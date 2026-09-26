// The full catalog. Each entry is the shape a document in the Firestore
// "products" collection should take, and doubles as fallback/demo data
// when Firebase isn't configured yet (see hooks/useProducts.js).
//
// Products with only one real size option (e.g. the canteen) still carry
// a single-entry `sizes` array with the label "One Size" — this keeps the
// add-to-cart flow (select size → select quantity → add) identical across
// every product, instead of special-casing sizeless items.

export const products = [
  {
    id: 'no-42-waxed-trail-jacket',
    sku: 'FS-042',
    name: 'No. 42 Waxed Trail Jacket',
    tagline: 'Reissued from the 1958 field pattern',
    price: 168,
    compareAtPrice: 210,
    currency: 'USD',
    category: 'Outerwear',
    description:
      'Cut from 12oz waxed cotton canvas and lined in brushed flannel, the No. 42 was first stocked for line crews working the northern routes. We pulled the original pattern out of storage and reissued it true to spec: bellowed chest pockets, a corduroy collar, and a storm flap that actually keeps weather out.',
    details: [
      '12oz waxed cotton canvas, re-waxable at home',
      'Brushed flannel lining through the body',
      'Corduroy under-collar, brass hardware',
      'Made in small batches, numbered on the inside placket',
    ],
    colors: [
      { id: 'field-tan', label: 'Field Tan', hex: '#C6A15B' },
      { id: 'oxblood', label: 'Oxblood', hex: '#6E2A2A' },
      { id: 'forest', label: 'Forest', hex: '#3F4F35' },
    ],
    sizes: [
      { id: 'xs', label: 'XS', inStock: true },
      { id: 's', label: 'S', inStock: true },
      { id: 'm', label: 'M', inStock: true },
      { id: 'l', label: 'L', inStock: true },
      { id: 'xl', label: 'XL', inStock: false },
    ],
    stampText: 'IN STOCK — SHIPS IN 2 DAYS',
    images: [
      { id: 1, label: 'Front, Field Tan' },
      { id: 2, label: 'Back, storm flap detail' },
      { id: 3, label: 'Corduroy collar, close' },
    ],
  },
  {
    id: 'no-17-canvas-rucksack',
    sku: 'FS-017',
    name: 'No. 17 Canvas Rucksack',
    tagline: 'The same pack the survey crews carried',
    price: 92,
    compareAtPrice: null,
    currency: 'USD',
    category: 'Bags',
    description:
      'A single-compartment rucksack built from the same 12oz canvas as the trail jacket, with a leather-strapped roll top and a bellows front pocket sized for a folded map or a thermos.',
    details: [
      '12oz cotton canvas body, full-grain leather straps',
      'Roll-top closure, 22L capacity',
      'Bellows front pocket with brass buckle',
      'Reinforced base panel for wet ground',
    ],
    colors: [
      { id: 'field-tan', label: 'Field Tan', hex: '#C6A15B' },
      { id: 'forest', label: 'Forest', hex: '#3F4F35' },
    ],
    sizes: [{ id: 'one-size', label: 'One Size', inStock: true }],
    stampText: 'IN STOCK — SHIPS IN 2 DAYS',
    images: [
      { id: 1, label: 'Front, roll-top closed' },
      { id: 2, label: 'Side, strap detail' },
    ],
  },
  {
    id: 'no-8-wool-trail-socks',
    sku: 'FS-008',
    name: 'No. 8 Wool Trail Socks',
    tagline: 'Three-pack, heavyweight merino',
    price: 24,
    compareAtPrice: 30,
    currency: 'USD',
    category: 'Accessories',
    description:
      'Heavyweight merino wool socks knit for cold, wet ground: cushioned heel and toe, ribbed arch support, and a stay-up cuff that doesn\u2019t need elastic to hold its shape.',
    details: [
      '70% merino wool, 28% nylon, 2% spandex',
      'Cushioned heel and toe zones',
      'Sold as a set of three pairs',
      'Machine washable, line dry',
    ],
    colors: [
      { id: 'oat', label: 'Oat', hex: '#D9C7A0' },
      { id: 'charcoal', label: 'Charcoal', hex: '#4A433C' },
    ],
    sizes: [
      { id: 's-m', label: 'S/M', inStock: true },
      { id: 'l-xl', label: 'L/XL', inStock: true },
    ],
    stampText: 'IN STOCK — SHIPS IN 2 DAYS',
    images: [
      { id: 1, label: 'Folded set, Oat' },
      { id: 2, label: 'Ribbed cuff, close' },
    ],
  },
  {
    id: 'no-55-waxed-field-cap',
    sku: 'FS-055',
    name: 'No. 55 Waxed Field Cap',
    tagline: 'Six-panel, waxed to match the jacket',
    price: 38,
    compareAtPrice: null,
    currency: 'USD',
    category: 'Accessories',
    description:
      'A six-panel field cap in the same waxed canvas as the No. 42 jacket, with a soft brushed-cotton sweatband and a brass side-release strap for an adjustable fit.',
    details: [
      'Waxed cotton canvas shell, re-waxable',
      'Brushed cotton sweatband',
      'Brass side-release adjuster strap',
      'Unstructured six-panel crown',
    ],
    colors: [
      { id: 'field-tan', label: 'Field Tan', hex: '#C6A15B' },
      { id: 'oxblood', label: 'Oxblood', hex: '#6E2A2A' },
    ],
    sizes: [
      { id: 's-m', label: 'S/M', inStock: true },
      { id: 'l-xl', label: 'L/XL', inStock: true },
    ],
    stampText: 'IN STOCK — SHIPS IN 2 DAYS',
    images: [
      { id: 1, label: 'Front, Field Tan' },
      { id: 2, label: 'Side, strap detail' },
    ],
  },
  {
    id: 'no-6-tin-camp-canteen',
    sku: 'FS-006',
    name: 'No. 6 Tin Camp Canteen',
    tagline: '1L, uncoated steel, felt cover',
    price: 46,
    compareAtPrice: null,
    currency: 'USD',
    category: 'Gear',
    description:
      'An uncoated steel canteen with a wool felt cover and a webbing strap, built to the original 1L survey-camp spec. Fine for cold liquids; not insulated.',
    details: [
      '1L uncoated steel body',
      'Wool felt cover, cotton webbing strap',
      'Leakproof cork-lined steel cap',
      'Not vacuum insulated — for cold liquids',
    ],
    colors: [{ id: 'forest', label: 'Forest Felt', hex: '#3F4F35' }],
    sizes: [{ id: 'one-size', label: 'One Size', inStock: true }],
    stampText: 'IN STOCK — SHIPS IN 2 DAYS',
    images: [
      { id: 1, label: 'Full canteen, strap out' },
      { id: 2, label: 'Cap detail' },
    ],
  },
  {
    id: 'no-29-oiled-work-gloves',
    sku: 'FS-029',
    name: 'No. 29 Oiled Work Gloves',
    tagline: 'Oil-tanned leather, unlined',
    price: 34,
    compareAtPrice: null,
    currency: 'USD',
    category: 'Accessories',
    description:
      'Unlined oil-tanned leather gloves that soften and mold to your hand with wear. Keystone thumb for grip, shirred elastic wrist for a snug fit without a cuff strap.',
    details: [
      'Oil-tanned cowhide, unlined',
      'Keystone thumb construction',
      'Shirred elastic wrist',
      'Breaks in with wear — no glove conditioner needed',
    ],
    colors: [{ id: 'russet', label: 'Russet', hex: '#8A5A34' }],
    sizes: [
      { id: 's', label: 'S', inStock: true },
      { id: 'm', label: 'M', inStock: true },
      { id: 'l', label: 'L', inStock: false },
    ],
    stampText: 'LIMITED STOCK',
    images: [
      { id: 1, label: 'Pair, palm down' },
      { id: 2, label: 'Cuff detail' },
    ],
  },
];

export function getProductById(productId) {
  return products.find((product) => product.id === productId) ?? null;
}
