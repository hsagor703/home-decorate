import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";

const ProductDetails = () => {
  const { products, loading, error } = useProducts();
  const { id } = useParams();
  const convertId = Number(id);
  if (loading) {
    return <p>Loading...</p>;
  }
  const findData = products.find((product) => product.id === convertId);

  const {
    category,
    description,
    dimensions,
    image,
    material,
    name,
    price,
    stock,
  } = findData;

  return (
    <div>
      <div className=" bg-base-100 shadow-sm mx-auto md:flex items-center my-5">
        <figure className=" overflow-hidden px-5">
          <img
            className=" rounded-lg md:h-77 hover:scale-110 transition ease-in-out"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p> <span className="font-bold">Description : </span>{description}</p>
          <p><span className="font-bold">Dimensions : </span>{dimensions}</p>
          <p><span className="font-bold">Material : </span>{material}</p>
          <p><span className="font-bold">Category : </span>{category}</p>
          <p><span className="font-bold">Price : </span>${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
<h1>this is details page</h1>;
