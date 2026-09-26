import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="masthead">
      <p className="masthead__eyebrow">Fieldstone Supply Co. — Est. catalog no. 12</p>
      <div className="masthead__row">
        <Link to="/" className="masthead__title-link">
          <h1 className="masthead__title">The Trailhead Order Form</h1>
        </Link>
        <Link to="/cart" className="cart-link" aria-label={`View bag, ${itemCount} item${itemCount === 1 ? '' : 's'}`}>
          <span className="cart-link__icon" aria-hidden="true">
            &#9782;
          </span>
          Bag
          <span className="cart-link__count">{itemCount}</span>
        </Link>
      </div>
    </header>
  );
}
