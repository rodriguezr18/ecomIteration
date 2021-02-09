import React, { useState } from "react";
import products from "../json/data.json";
import ProductCards from "../Components/ProductCards";
import Select from "react-select";
import "../styles/product.css";

const options = [
  { value: "0", label: "Filter By" },
  { value: "1", label: "Lowest To Highest Price" },
  { value: "2", label: "Highest To Lowest Price" },
];

function Product() {
  const [filterValue, setFilterValue] = useState("0");

  // Changing the filter value allowing it to move back and forth from 0-2
  const handleChange = (selectOption) => {
    setFilterValue(selectOption.value);
  };

  let data = products.products.slice();
  if (filterValue === "0") {
    data = products.products.slice();
  } else if (filterValue === "1") {
    data.sort((a, b) => {
      return a.price - b.price;
    });
  } else {
    data.sort((a, b) => {
      return b.price - a.price;
    });
  }

  return (
    <>
      <Select
        value={options.find((obj) => obj.value === filterValue)}
        onChange={handleChange}
        options={options}
      />

      <div class="steez"></div>

      <h2>Products</h2>
      <section className="grid">
        {data.map((prod) => (
          <ProductCards
            title={prod.productName + " | " + prod.artistName}
            imageSrc={prod.imgSource}
            price={"$" + prod.price}
            description={prod.description}
            imgAlt={`${prod.productName} ${prod.artistName} `}
            key={prod.id}
          />
        ))}
      </section>
    </>
  );
}

export default Product;
