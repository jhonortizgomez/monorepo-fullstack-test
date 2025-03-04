import { findBestCombinationsProducts } from "@repo/core/helpers/findBestCombinationsProducts";
import { NextResponse, NextRequest } from "next/server";
import productsData from "@repo/core/products-data"

export async function GET(request: NextRequest) {
  const budget = request.nextUrl.searchParams.get("budget");
  if(!budget){
    const dataProducts = productsData;
    const response = NextResponse.json(dataProducts);
    return response
  }
  
  const productsByBudget =  findBestCombinationsProducts(productsData, Number(budget))
  const response = NextResponse.json(productsByBudget)
  return response
}