import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import styled from "styled-components";

const StyledGrid = styled.div`
display: flex;
flex-wrap: wrap;
margin: auto;
border: 1px solid green;
justify-content: center;
gap: 10px;
`

const ProductsGrid = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products)
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    

  return (
      <StyledGrid>
          <ProductCard />
          {products.map((product) => <ProductCard product={product} key={product?.id} />)}
          
    </StyledGrid>
  )
}

export default ProductsGrid