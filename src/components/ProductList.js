// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductList = (props) => {

  // const products = useSelector((state)=> state.products.products)
  const products= props.products;
  console.log(products)
  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
       
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {/* <Link to="/products/FormProduct">
      <button type="button" class="btn btn-secondary">Add a Product</button>
        </Link> */}
      <ListWrapper>{productList}</ListWrapper>
    </div>
  );
};

export default ProductList;
