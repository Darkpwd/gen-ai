'use client'; // Corrigido para 'use client'
import React, { useEffect, useState } from "react";
import {
    useStripe,
    useElements,
    PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

const CheckoutPage = ({ amount }: { amount: number }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [clientSecret, setClientSecret] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchPaymentIntent = async () => {
            try {
                const res = await fetch("/api/create-payment-intent", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
                });

                if (!res.ok) {
                    throw new Error("Failed to create Payment Intent");
                }

                const data = await res.json();
                setClientSecret(data.clientSecret);
            } catch (error) {
                setErrorMessage(error.message);
            }
        };

        fetchPaymentIntent();
    }, [amount]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            return;
        }

        setLoading(true);
        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: window.location.origin, // Ajuste a URL conforme necessário
            },
        });

        if (result.error) {
            setErrorMessage(result.error.message || "An unknown error occurred.");
        } else {
            // O pagamento foi bem-sucedido
            console.log("Payment succeeded:", result.paymentIntent);
            // Você pode redirecionar o usuário ou mostrar uma mensagem de sucesso aqui
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            {errorMessage && <div className="error">{errorMessage}</div>}
            {clientSecret && <PaymentElement />}
            <button type="submit" disabled={!stripe || loading}>
                {loading ? "Processing..." : "Pay"}
            </button>
        </form>
    );
};

export default CheckoutPage;
