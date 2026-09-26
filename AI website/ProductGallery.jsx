import { useId } from 'react';

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 10;

export default function QuantityStepper({ quantity, onChange, label = 'Quantity', hideLabel = false }) {
  const labelId = useId();

  function decrease() {
    onChange(Math.max(MIN_QUANTITY, quantity - 1));
  }

  function increase() {
    onChange(Math.min(MAX_QUANTITY, quantity + 1));
  }

  function handleInputChange(event) {
    const rawValue = Number(event.target.value);
    if (Number.isNaN(rawValue)) return;
    const clamped = Math.min(MAX_QUANTITY, Math.max(MIN_QUANTITY, Math.floor(rawValue)));
    onChange(clamped);
  }

  return (
    <div className="quantity-stepper">
      <span className={`option-group__legend ${hideLabel ? 'visually-hidden' : ''}`} id={labelId}>
        {label}
      </span>
      <div className="quantity-stepper__control">
        <button
          type="button"
          className="quantity-stepper__button"
          onClick={decrease}
          disabled={quantity <= MIN_QUANTITY}
          aria-label="Decrease quantity"
        >
          &minus;
        </button>
        <input
          type="number"
          className="quantity-stepper__input"
          value={quantity}
          min={MIN_QUANTITY}
          max={MAX_QUANTITY}
          onChange={handleInputChange}
          aria-labelledby={labelId}
        />
        <button
          type="button"
          className="quantity-stepper__button"
          onClick={increase}
          disabled={quantity >= MAX_QUANTITY}
          aria-label="Increase quantity"
        >
          &#43;
        </button>
      </div>
    </div>
  );
}
