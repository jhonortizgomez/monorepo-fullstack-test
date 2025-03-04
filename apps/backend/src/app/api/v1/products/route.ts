import { NextResponse, NextRequest } from "next/server";
import { findBestCombinationsProducts } from "@repo/core/helpers/findBestCombinationsProducts";
import productsData from "@repo/core/products-data";

export async function GET(request: NextRequest) {
  const budget = request.nextUrl.searchParams.get("budget");
  const response = NextResponse.json(
    budget 
      ? findBestCombinationsProducts(productsData, Number(budget)) 
      : productsData
  );

  response.headers.set("Access-Control-Allow-Origin", "*"); 
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return response;
}
