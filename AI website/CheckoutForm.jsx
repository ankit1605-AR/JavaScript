export default function ColorSelector({ colors, selectedColorId, onSelect }) {
  const selectedColor = colors.find((color) => color.id === selectedColorId);

  return (
    <fieldset className="option-group">
      <legend className="option-group__legend">
        Color
        {selectedColor ? <span className="option-group__value"> — {selectedColor.label}</span> : null}
      </legend>
      <div className="swatch-row">
        {colors.map((color) => (
          <label key={color.id} className="swatch">
            <input
              type="radio"
              name="color"
              value={color.id}
              checked={selectedColorId === color.id}
              onChange={() => onSelect(color.id)}
              className="swatch__input"
            />
            <span
              className="swatch__chip"
              style={{ background: color.hex }}
              aria-hidden="true"
            />
            <span className="visually-hidden">{color.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
