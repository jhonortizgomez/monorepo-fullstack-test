import { NextRequest, NextResponse } from "next/server";

let cart: { id: string; name: string; price: number }[] = [];

export async function GET() {
  const response = cart;
  return NextResponse.json(response)
}

export async function POST(req: NextRequest) {
  try {
    const { id, name, price } = await req.json();
    if (!id || !name || !price) {
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }
    const newProduct = { id, name, price };
    cart.push(newProduct);
    return NextResponse.json({ message: "Producto agregado", cart });
  } catch (error) {
    return NextResponse.json({ error: "Error en la petición" }, { status: 500 });
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