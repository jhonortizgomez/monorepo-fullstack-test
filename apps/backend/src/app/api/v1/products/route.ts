import { NextResponse } from "next/server";
import productsData from "@repo/core/products-data"

export async function GET() {
  const response = productsData;
  return NextResponse.json(response)
}