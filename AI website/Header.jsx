import { useState } from 'react';
import { validateOrderForm, hasErrors } from '../utils/validation.js';

const INITIAL_VALUES = {
  fullName: '',
  email: '',
  address: '',
  city: '',
  zip: '',
};

const FIELDS = [
  { name: 'fullName', label: 'Full name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'address', label: 'Shipping address', type: 'text', autoComplete: 'street-address' },
  { name: 'city', label: 'City', type: 'text', autoComplete: 'address-level2' },
  { name: 'zip', label: 'ZIP code', type: 'text', autoComplete: 'postal-code' },
];

export default function CheckoutForm({
  lineItems,
  totalPrice,
  currency,
  orderNumber,
  status,
  submitError,
  onSubmit,
}) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const isSubmitting = status === 'submitting';
  const isSuccess = status === 'success';

  function handleChange(name, value) {
    setValues((previous) => ({ ...previous, [name]: value }));
  }

  function handleBlur(name) {
    setTouched((previous) => ({ ...previous, [name]: true }));
    setErrors(validateOrderForm(values));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateOrderForm(values);
    setErrors(nextErrors);
    setTouched({
      fullName: true,
      email: true,
      address: true,
      city: true,
      zip: true,
    });

    if (hasErrors(nextErrors)) {
      return;
    }

    onSubmit({ ...values, lineItems, totalPrice, currency });
  }

  if (isSuccess) {
    return (
      <div className="order-confirmation" role="status">
        <span className="stamp-badge__ring order-confirmation__mark" aria-hidden="true">
          &#10003;
        </span>
        <h3 className="order-confirmation__title">Order placed — No. {orderNumber}</h3>
        <p className="order-confirmation__body">
          We&rsquo;ve sent a confirmation to <strong>{values.email}</strong>. Your{' '}
          {lineItems.length === 1 ? 'item ships' : `${lineItems.length} items ship`} within 2
          business days.
        </p>
      </div>
    );
  }

  return (
    <form className="order-form" onSubmit={handleSubmit} noValidate>
      <div className="order-form__perforation" aria-hidden="true" />
      <p className="order-form__eyebrow">Order Coupon — Fill Out Completely</p>

      {FIELDS.map((field) => {
        const fieldError = touched[field.name] ? errors[field.name] : undefined;
        return (
          <div className="form-field" key={field.name}>
            <label className="form-field__label" htmlFor={field.name}>
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              className={`form-field__input ${fieldError ? 'has-error' : ''}`}
              value={values[field.name]}
              onChange={(event) => handleChange(field.name, event.target.value)}
              onBlur={() => handleBlur(field.name)}
              aria-invalid={Boolean(fieldError)}
              aria-describedby={fieldError ? `${field.name}-error` : undefined}
            />
            {fieldError ? (
              <p className="field-error" id={`${field.name}-error`} role="alert">
                {fieldError}
              </p>
            ) : null}
          </div>
        );
      })}

      {submitError ? (
        <p className="field-error field-error--form" role="alert">
          {submitError}
        </p>
      ) : null}

      <button type="submit" className="btn btn--primary btn--block" disabled={isSubmitting}>
        {isSubmitting ? 'Placing order…' : `Place order — ${currency} ${totalPrice.toFixed(2)}`}
      </button>
    </form>
  );
}
