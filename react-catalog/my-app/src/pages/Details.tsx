import { useNavigate, useParams } from 'react-router';
import { Product, readProduct, toDollars } from '../lib';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PiCaretDoubleLeftBold } from 'react-icons/pi';

export function Details() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) {
          navigate('*');
          return;
        }
        const data = await readProduct(parseInt(productId));
        if (!data) {
          navigate('*');
          return;
        }
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  });

  if (product === null) {
    navigate('*');
    return;
  }

  function handleAddClick(name: string) {
    alert(`Added ${name} to cart.`);
  }
  return (
    <section className="max-w-[1000px] mx-auto">
      <div className="flex flex-col gap-4 px-4 mt-2 border-2 border-gray-200">
        <Link to={'/'} className="flex items-center pl-6 mt-2">
          <PiCaretDoubleLeftBold />
          Back to Catalog
        </Link>
        <div className="flex gap-2 img-details">
          <div className="img max-h-[400px] basis-1/3 shrink-0 flex">
            <img src={product.imageUrl} alt={product.name} className="h-full" />
          </div>
          <div className="flex flex-col gap-4 mt-4 details">
            <h2 className="text-4xl">{product.name}</h2>
            <p>{toDollars(product.price)}</p>
            <p>{product.shortDescription}</p>
          </div>
        </div>
        <div className="mt-4 mb-8 long-description">
          <p>{product.longDescription}</p>
        </div>
      </div>
      <button
        onClick={() => handleAddClick(product.name)}
        className="px-2 py-1 my-2 bg-gray-300 border-2 rounded-md hover:border-blue-500">
        Add to Cart
      </button>
    </section>
  );
}
