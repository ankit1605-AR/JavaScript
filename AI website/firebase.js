import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebase.js';
import { getProductById } from '../data/products.js';

// Loads a single product document from Firestore ("products/{productId}").
// Falls back to the matching local sample product when Firebase hasn't
// been configured yet, or when the fetch fails/returns nothing, so a
// product page is always demoable without setup.
export function useProduct(productId) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDemoData, setIsDemoData] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    setIsLoading(true);

    async function loadProduct() {
      const fallback = getProductById(productId);

      if (!isFirebaseConfigured) {
        if (!isCancelled) {
          setProduct(fallback);
          setIsDemoData(true);
          setIsLoading(false);
        }
        return;
      }

      try {
        const productRef = doc(db, 'products', productId);
        const snapshot = await getDoc(productRef);

        if (!isCancelled) {
          if (snapshot.exists()) {
            setProduct({ id: snapshot.id, ...snapshot.data() });
            setIsDemoData(false);
          } else {
            setProduct(fallback);
            setIsDemoData(true);
          }
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Failed to load product from Firestore:', error);
        if (!isCancelled) {
          setProduct(fallback);
          setIsDemoData(true);
          setIsLoading(false);
        }
      }
    }

    loadProduct();
    return () => {
      isCancelled = true;
    };
  }, [productId]);

  return { product, isLoading, isDemoData };
}
