import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../store/productsSlice';

const EditProduct = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [available, setAvailable] = useState(product.available);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = { id: product.id, name, description, price, available };
    dispatch(updateProduct(updatedProduct));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Available:
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      </label>
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProduct;