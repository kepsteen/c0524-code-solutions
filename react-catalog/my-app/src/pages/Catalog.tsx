import { Product } from '../lib/data';
import { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { readCatalog } from '../lib/read';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await readCatalog();
      setProducts(data);
      console.log('products fetched');
    };
    try {
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  }, [products]);
  return (
    <section className="max-w-[1000px] px-4 mx-auto mt-2 mb-6">
      <h1 className="pb-5 text-5xl border-b-4 border-b-gray-200">Catalog</h1>
      <div className="flex justify-between flex-wrap gap-6 max-w-[300px] sm:max-w-[600px] md:max-w-[740px] lg:max-w-[1000px] mt-4 mx-auto">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  );
}
