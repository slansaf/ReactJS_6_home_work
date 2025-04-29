import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productsSlice';
import { Box, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { id: Date.now(), name, description, price: parseFloat(price), available };
    dispatch(addProduct(newProduct));
    setName('');
    setDescription('');
    setPrice(0);
    setAvailable(true);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        padding: 4,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 400,
      }}
    >
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={3}
        fullWidth
      />
      <TextField
        label="Price"
        variant="outlined"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
            color="primary"
          />
        }
        label="Available"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Product
      </Button>
    </Box>
  );
};

export default AddProduct;
