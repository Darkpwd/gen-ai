"use client"; // Adicionando a diretiva para tornar este um Client Component

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; // Usando useSearchParams para obter parâmetros da URL
import { Check } from 'lucide-react'; // Certifique-se de que este pacote está instalado
import { Button } from '@/components/ui/Button'; // Verifique o caminho
import { Card } from '@/components/ui/Card'; // Verifique o caminho

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('payment_intent'); // Obtendo o paymentId dos parâmetros de busca

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8">
        <div className="text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-4">
            Thank you for your purchase. Your payment has been processed successfully.
          </p>
          {paymentId && (
            <p className="text-sm text-gray-500 mb-6">
              Payment ID: {paymentId}
            </p>
          )}
          <div className="space-y-4">
            <Button asChild variant="outline" className="w-full">
              <Link href="/dashboard">Return to Home</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
