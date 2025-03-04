import { NextRequest, NextResponse } from "next/server";

let cart: { id: string; name: string; price: number, image: string }[] = [];

function addCorsHeaders(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}

export async function GET() {
  const response = NextResponse.json(cart);
  return addCorsHeaders(response);
}

export async function POST(req: NextRequest) {
  try {
    const { id, name, price, image } = await req.json();
    if (!id || !name || !price) {
      const response = NextResponse.json({ error: "Faltan datos" }, { status: 400 });
      return addCorsHeaders(response);
    }
    const newProduct = { id, name, price, image };
    cart.push(newProduct);
    const response = NextResponse.json({ message: "Producto agregado", cart });
    return addCorsHeaders(response);
  } catch {
    const response = NextResponse.json({ error: "Error en la petición" }, { status: 500 });
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
  } catch {
    return NextResponse.json({ error: "Error en la petición" }, { status: 500 });
  }
}

export async function OPTIONS() {
  const response = NextResponse.json({});
  return addCorsHeaders(response);
}
