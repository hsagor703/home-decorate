import React from "react";
import ProductItems from "../Components/ProductItems";
import useProducts from "../Hooks/useProducts";

const Products = () => {
  const { products } = useProducts();
  return (
    <div className="my-10">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-medium">All Products</h2>
        <button className="btn btn-info text-white">
          Search 
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
        {products.map((product) => (
          <ProductItems key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
<h1>this is products pages</h1>;
