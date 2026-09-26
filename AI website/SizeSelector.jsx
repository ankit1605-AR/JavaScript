import QuantityStepper from './QuantityStepper.jsx';

export default function CartLineItem({ line, onUpdateQuantity, onRemove }) {
  return (
    <div className="cart-line">
      <div className="cart-line__swatch" style={{ background: line.colorHex }} aria-hidden="true" />

      <div className="cart-line__info">
        <p className="cart-line__name">{line.name}</p>
        <p className="cart-line__variant">
          {line.colorLabel} &middot; Size {line.sizeLabel}
        </p>
        <p className="cart-line__price">${line.price.toFixed(2)} each</p>
      </div>

      <div className="cart-line__controls">
        <QuantityStepper
          quantity={line.quantity}
          onChange={(quantity) => onUpdateQuantity(line.key, quantity)}
          label={`Quantity for ${line.name}, ${line.colorLabel}, size ${line.sizeLabel}`}
          hideLabel
        />
        <button type="button" className="cart-line__remove" onClick={() => onRemove(line.key)}>
          Remove
        </button>
      </div>

      <p className="cart-line__subtotal">${(line.price * line.quantity).toFixed(2)}</p>
    </div>
  );
}
