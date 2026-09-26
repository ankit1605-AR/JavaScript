import { Link } from 'react-router-dom';

const PLATE_PALETTE = ['#C6A15B', '#8A6A3E', '#40352A', '#6E2A2A', '#3F4F35', '#4C6B73'];

export default function ProductCard({ product, paletteIndex }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div
        className="product-card__plate"
        style={{ background: PLATE_PALETTE[paletteIndex % PLATE_PALETTE.length] }}
      >
        {product.compareAtPrice ? <span className="product-card__sale-flag">Sale</span> : null}
      </div>
      <p className="product-card__category">{product.category}</p>
      <h3 className="product-card__name">{product.name}</h3>
      <div className="product-card__price-row">
        <span className="product-card__price">${product.price.toFixed(2)}</span>
        {product.compareAtPrice ? (
          <span className="product-card__compare">${product.compareAtPrice.toFixed(2)}</span>
        ) : null}
      </div>
    </Link>
  );
}
