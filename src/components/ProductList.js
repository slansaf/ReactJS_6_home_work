import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, toggleAvailability } from '../store/productsSlice';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  const handleToggleAvailability = (id) => {
    dispatch(toggleAvailability(id));
  };

  return (
    <div>
      <h2>Product Catalog</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Available: {product.available ? 'Yes' : 'No'}</p>
            <button onClick={() => handleRemove(product.id)}>Remove</button>
            <button onClick={() => handleToggleAvailability(product.id)}>
              {product.available ? 'Mark as Unavailable' : 'Mark as Available'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;