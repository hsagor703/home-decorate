import React from "react";
import { Link } from "react-router";
import Card from "../Components/Card";
import useProducts from "../Hooks/useProducts";

const Home = () => {
  const {products, loading, error} = useProducts();

  const cuttingData = products.slice(6,12);
  return (
    <div className="my-10">
        <div className="flex justify-between items-center mb-3 ">
            <h2 className="text-2xl font-medium">Feature Products</h2>
            <Link className="btn btn-info text-white" to='/products'>See All Products</Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-10 justify-center">
        {cuttingData.map((furniture) => (
          <Card key={furniture.id} furniture={furniture}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
<h1>this is home page</h1>;
