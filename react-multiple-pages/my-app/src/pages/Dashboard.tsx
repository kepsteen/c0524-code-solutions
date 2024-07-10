import { useEffect, useState } from 'react';
import { type Item, readItems } from '../lib/read';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItems() {
      try {
        const values = await readItems();
        setItems(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <hr className="py-1" />
      <div className="flex flex-wrap">
        {items?.map((item) => (
          <Link
            key={item.itemId}
            className="w-full pl-4 pr-4 md:w-1/2 lg:w-1/3"
            to={`details/${item.itemId}`}>
            <ItemCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  item: Item;
};
function ItemCard({ item }: CardProps) {
  return (
    <div className="block mb-4 text-gray-900 border border-gray-300 rounded cursor-pointer">
      <div className="flex-auto p-6">
        <h5 className="mb-3 font-bold">{item.name}</h5>
      </div>
    </div>
  );
}
