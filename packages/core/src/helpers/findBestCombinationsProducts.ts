export const findBestCombinationsProducts = (products: any[], budget: number) => {
  const productsByBudget = [] as any[]
  let total = 0;
  
  const sortAscProductsByPrice = products.sort((a, b) => a.price - b.price);
  sortAscProductsByPrice.forEach((product: any) => {
    if (total + product.price <= budget){
      productsByBudget.push(product)
      total += product.price
    }
  })
  return productsByBudget;
}