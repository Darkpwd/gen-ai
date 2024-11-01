import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe"; // Importando o Stripe corretamente

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest) {
  try {
    const { customerId } = await request.json(); // O ID do cliente deve ser passado na requisição

    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: 'price_1QFhUqA70RooKY7JBNMCMbLL' }],
    });

    return NextResponse.json({ subscription });
    
  } catch (error) {
    console.error("Internal Error:", error);

    return NextResponse.json(
      { error: `Internal Server Error: ${error.message}` },
      { status: 500 }
    );
  }
}
