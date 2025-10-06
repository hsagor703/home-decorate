import React, { useState } from "react";
import ProductItems from "../Components/ProductItems";
import useProducts from "../Hooks/useProducts";

const Products = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase();
  const searchedData = term ? products.filter(product => product.name.toLocaleLowerCase().includes(term)) : products;
  return (
    <div className="my-10">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-medium">All Products : <span className="text-sm">({searchedData.length})</span></h2>
        <label className="input">
          <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="search products" />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
        {searchedData.map((product) => (
          <ProductItems key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
<h1>this is products pages</h1>;
