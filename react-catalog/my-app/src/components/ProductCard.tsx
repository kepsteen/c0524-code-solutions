import { Link } from 'react-router-dom';
import { Product, toDollars } from '../lib';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <>
      <Link
        to={`/details/${product.productId}`}
        className="flex flex-col card h-[500px] shrink-0 w-full sm:w-[calc(50%-1.5rem)] md:w-[calc(33.333%-1rem)] border-2 rounded-md border-gray-200">
        <div className="flex items-center w-full img h-2/3">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2 mx-4 mb-6 item-details">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-400">{toDollars(product.price)}</p>
          <p className="leading-tight">{product.shortDescription}</p>
        </div>
      </Link>
    </>
  );
}
