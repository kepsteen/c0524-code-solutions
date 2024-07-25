import { useNavigate } from 'react-router';
import { Product } from '../pages/Catalog';
import { toDollars } from '../lib/to-dollars';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const navigate = useNavigate();
  function handleClick(productId: number) {
    navigate(`/products/${productId}`);
  }
  return (
    <>
      <div
        className="card-wrapper"
        onClick={() => handleClick(product.productId)}>
        <div className="card">
          <div className="img-wrapper">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full"
            />
          </div>
          <h2 className="text-xl">{product.name}</h2>
          <p className="text-lg text-gray-400">{toDollars(product.price)}</p>
          <p>{product.shortDescription}</p>
        </div>
      </div>
    </>
  );
}
