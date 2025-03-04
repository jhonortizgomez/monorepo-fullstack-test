import { backendUrls } from "../config/urls";

const cartUrls = backendUrls.cart;

export const getProductsCart = async() => {
  try {
    const response = await fetch(cartUrls.all, {
      method: "GET",
      cache: "no-store",
    })
    const data = await response.json();
    return data
  } catch (error) {
    console.log("Error to get products", error)
    return []
  }
}

export const AddProductToCart = async(product: ProductType) => {
  try {
    const response = await fetch(cartUrls.all, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    const data = await response.json();
    return data
  } catch (error) {
    console.log("Error to get products", error)
    return []
  }
}