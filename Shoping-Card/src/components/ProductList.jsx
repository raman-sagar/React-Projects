import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "HeadPhone", price: 100 },
    { id: 4, name: "keyboard", price: 70 },
    { id: 5, name: "Mic", price: 200 },
    { id: 6, name: "Pendrive", price: 100 },
    { id: 7, name: "Earbuds", price: 262 },
    { id: 8, name: "Mouse", price: 108 },
    { id: 9, name: "Datacable", price: 282 },
    { id: 10, name: "Charger", price: 211 },
  ];

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-3 mb-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
