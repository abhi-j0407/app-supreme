import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { fetchProducts } from "../utils/productsStore";

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  border: 1px solid green;
  justify-content: center;
  gap: 10px;
`;

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const allProducts = await fetchProducts();
    setProducts(allProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <StyledGrid>
      <ProductCard />
      {products.map((product) => (
        <ProductCard product={product} key={product?.id} />
      ))}
    </StyledGrid>
  );
};

export default ProductsGrid;
