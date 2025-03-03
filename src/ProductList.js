// ProductList.js (Simplified)
import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5050/api/products') // Fetch data from your backend API
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}> {/* Important: Use a unique key */}
            <h3>{product.name}</h3>
            <img src={product.imageUrl} alt={product.name} width="200" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;