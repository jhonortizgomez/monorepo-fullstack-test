export const findBestCombinationsProducts = (products: ProductType[], budget: number) => {
  const productsByBudget = [] as ProductType[]
  let total = 0;
  
  const sortAscProductsByPrice = products.sort((a, b) => a.price - b.price);
  sortAscProductsByPrice.forEach((product) => {
    if (total + product.price <= budget){
      productsByBudget.push(product)
      total += product.price
    }
  })
  return productsByBudget;
}

type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
}