import React from "react";
import { Link } from "react-router";

const ProductItems = ({product}) => {
  const {
    category,
    description,
    dimensions,
    id,
    image,
    material,
    name,
    price,
    stock,
  } = product;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm mx-auto">
        <figure className="h-48 overflow-hidden">
          <img
            className="w-full object-cover hover:scale-110 transition ease-in-out"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <p>Category : {category}</p>
          <p>Price : ${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/productDetails/${id}`} className="btn btn-block bg-teal-200">view details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
