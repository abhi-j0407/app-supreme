const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};

const fetchProduct = async (id) => {
  const product = await fetch(`https://dummyjson.com/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    return data;
  });

  return product;
};



export { fetchProducts, fetchProduct };
