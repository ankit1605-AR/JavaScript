import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../firebase.js';
import { products as sampleProducts } from '../data/products.js';

// Loads every document in the Firestore "products" collection. Falls back
// to the local sample catalog when Firebase hasn't been configured yet,
// when the collection is empty, or when the fetch fails — so the catalog
// page always has something real to render.
export function useProducts() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDemoData, setIsDemoData] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function loadProducts() {
      if (!isFirebaseConfigured) {
        if (!isCancelled) {
          setItems(sampleProducts);
          setIsDemoData(true);
          setIsLoading(false);
        }
        return;
      }

      try {
        const snapshot = await getDocs(collection(db, 'products'));
        const fetched = snapshot.docs.map((docSnapshot) => ({
          id: docSnapshot.id,
          ...docSnapshot.data(),
        }));

        if (!isCancelled) {
          if (fetched.length > 0) {
            setItems(fetched);
            setIsDemoData(false);
          } else {
            setItems(sampleProducts);
            setIsDemoData(true);
          }
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Failed to load products from Firestore:', error);
        if (!isCancelled) {
          setItems(sampleProducts);
          setIsDemoData(true);
          setIsLoading(false);
        }
      }
    }

    loadProducts();
    return () => {
      isCancelled = true;
    };
  }, []);

  return { products: items, isLoading, isDemoData };
}
