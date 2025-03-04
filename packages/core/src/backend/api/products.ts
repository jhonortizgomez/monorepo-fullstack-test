import { backendUrls } from "../config/urls";

const productsUrls = backendUrls.products;

export const getProducts = async(budget?: number) => {
  const url = !budget ? productsUrls.all : productsUrls.withParams(budget)
  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "force-cache"
    })
    const data = await response.json();
    return data
  } catch (error) {
    console.log("Error to get products", error)
    return []
  }
}