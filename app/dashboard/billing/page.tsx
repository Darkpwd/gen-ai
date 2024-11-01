"use client";
import React from 'react';
import { Check, Zap, Crown, Rocket, Star, Flame } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
console.log('Stripe API Key:', process.env.NEXT_PUBLIC_STRIPE_PUB_KEY);

// Inicialize o Stripe com sua chave pública
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '');

const plans = [
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    icon: Zap,
    features: ['2 Team Members', '1,000 API Calls', 'Basic Analytics', 'Email Support'],
    color: 'blue',
    popular: false,
    priceId: 'price_1QGNTPA70RooKY7J7UMVR4T0' // Certifique-se de que este preço é recorrente
  },
  {
    name: 'Enterprise',
    price: '$60',
    period: '/year', // Corrigi a string para 'year' em vez de 'Year'
    icon: Rocket,
    features: ['Unlimited Team Members', 'Unlimited API Calls', 'Custom Analytics', '24/7 Support', 'Dedicated Account Manager', 'Custom Solutions'],
    color: 'indigo',
    popular: false,
    priceId: 'price_1QGNU5A70RooKY7JOW2OzYgx' // Certifique-se de que este preço é recorrente
  },
  {
    name: 'PRO',
    price: '$100',
    period: '/year', // Corrigi a string para 'year' em vez de 'Year'
    icon: Flame,
    features: ['Unlimited Team Members', 'Unlimited API Calls', 'Custom Analytics', '24/7 Support', 'Dedicated Account Manager', 'Custom Solutions'],
    color: 'indigo',
    popular: false,
    priceId: 'price_1QGNr5A70RooKY7JvxVeuoRR' // Certifique-se de que este preço é recorrente
  }
];

function PlanCard({ plan }) {
  const Icon = plan.icon;
  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
    indigo: 'bg-indigo-500 hover:bg-indigo-600'
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: plan.priceId, quantity: 1 }], // Certifique-se de que priceId é um preço recorrente
      mode: 'subscription', // Este deve ser 'subscription' para preços recorrentes
      successUrl: `${window.location.origin}/dashboard/payment-success`,
      cancelUrl: `${window.location.origin}/dashboard/payment-cancel`
    });

    if (error) {
      console.error("Stripe checkout error:", error);
      alert("Ocorreu um erro durante o processo de checkout. Tente novamente.");
    }
  };

  return (
    <div className={`relative bg-white rounded-2xl shadow-xl p-8 transition-transform duration-300 hover:-translate-y-2 ${plan.popular ? 'border-2 border-purple-500' : ''}`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star className="w-4 h-4" /> Most Popular
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 mb-6">
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
      
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
        <span className="text-gray-600 ml-1">{plan.period}</span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-600">
            <Check className="w-5 h-5 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
      
      <button onClick={handleCheckout} className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition-colors ${colorClasses[plan.color]}`}>
        Get Started
      </button>
    </div>
  );
}

function dashboard() {
  return (
    <Elements stripe={stripePromise}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Gen AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default dashboard;