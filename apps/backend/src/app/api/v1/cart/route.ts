import { NextRequest, NextResponse } from "next/server";

let cart: { id: string; name: string; price: number }[] = [];

function addCorsHeaders(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}

export async function GET() {
  let response = NextResponse.json(cart);
  return addCorsHeaders(response);
}

export async function POST(req: NextRequest) {
  try {
    const { id, name, price } = await req.json();
    if (!id || !name || !price) {
      let response = NextResponse.json({ error: "Faltan datos" }, { status: 400 });
      return addCorsHeaders(response);
    }
    const newProduct = { id, name, price };
    cart.push(newProduct);
    let response = NextResponse.json({ message: "Producto agregado", cart });
    return addCorsHeaders(response);
  } catch (error) {
    let response = NextResponse.json({ error: "Error en la petición" }, { status: 500 });
    return addCorsHeaders(response);
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "ID requerido" }, { status: 400 });
    }
    cart = cart.filter((item) => item.id !== id);
    return NextResponse.json({ message: "Producto eliminado", cart });
  } catch (error) {
    return NextResponse.json({ error: "Error en la petición" }, { status: 500 });
  }
}

export async function OPTIONS() {
  let response = NextResponse.json({});
  return addCorsHeaders(response);
}