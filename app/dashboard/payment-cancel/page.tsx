"use client"; // Certifique-se de que isso está presente

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; // Usando useSearchParams para obter parâmetros da URL
import { Button } from '@/components/ui/Button'; // Verifique se este caminho está correto
import { Card } from '@/components/ui/Card'; // Verifique se este nome está correto

export default function PaymentFailedPage() {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get('error'); // Obtendo o erro dos parâmetros de busca

  // Mensagem padrão se não houver erro
  const message = errorMessage 
    ? decodeURIComponent(errorMessage) 
    : 'An error occurred during payment processing';

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8">
        <div className="text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <span className="w-8 h-8 text-red-600 text-3xl">✖</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Payment Failed
          </h1>
          <p className="text-gray-600 mb-6">
            {message}
          </p>
          <div className="space-y-4">
            <Button asChild className="w-full bg-red-600 hover:bg-red-700">
              <Link href="/dashboard/billing">Try Again</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="mailto:gustavosantana559@gmail.com">Contact Support</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full">
              <Link href="/dashboard">Return to Home</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
