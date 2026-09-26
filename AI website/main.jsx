import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebase.js';

// Encapsulates the "submit an order" side effect so CheckoutForm only has
// to deal with form state. Writes one document to the Firestore "orders"
// collection containing every cart line item; in demo mode (no Firebase
// project configured) it simulates the round trip so the UI stays fully
// demoable.
export function useOrderSubmit() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [submitError, setSubmitError] = useState(null);

  async function submitOrder(orderPayload) {
    setStatus('submitting');
    setSubmitError(null);

    try {
      if (!isFirebaseConfigured) {
        // Demo mode: simulate network latency so the loading state is
        // visible, then resolve as if the write succeeded.
        await new Promise((resolve) => setTimeout(resolve, 700));
        console.info('[demo mode] Order would be written to Firestore:', orderPayload);
      } else {
        await addDoc(collection(db, 'orders'), {
          ...orderPayload,
          createdAt: serverTimestamp(),
        });
      }
      setStatus('success');
      return true;
    } catch (error) {
      console.error('Failed to submit order:', error);
      setSubmitError('Something went wrong placing your order. Please try again.');
      setStatus('error');
      return false;
    }
  }

  function resetOrderStatus() {
    setStatus('idle');
    setSubmitError(null);
  }

  return { status, submitError, submitOrder, resetOrderStatus };
}
