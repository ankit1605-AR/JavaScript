export default function SizeSelector({ sizes, selectedSizeId, onSelect, error }) {
  return (
    <fieldset className="option-group" aria-describedby={error ? 'size-error' : undefined}>
      <legend className="option-group__legend">Size</legend>
      <div className="size-row" role="radiogroup" aria-label="Size" aria-invalid={Boolean(error)}>
        {sizes.map((size) => (
          <label
            key={size.id}
            className={`size-chip ${size.inStock ? '' : 'is-disabled'} ${
              selectedSizeId === size.id ? 'is-selected' : ''
            }`}
          >
            <input
              type="radio"
              name="size"
              value={size.id}
              disabled={!size.inStock}
              checked={selectedSizeId === size.id}
              onChange={() => onSelect(size.id)}
              className="size-chip__input"
            />
            {size.label}
          </label>
        ))}
      </div>
      {error ? (
        <p className="field-error" id="size-error" role="alert">
          {error}
        </p>
      ) : (
        <p className="option-group__hint">Out-of-stock sizes are shown struck through.</p>
      )}
    </fieldset>
  );
}
