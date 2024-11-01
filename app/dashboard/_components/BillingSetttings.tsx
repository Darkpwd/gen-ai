'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';


export function BillingSettings() {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateBilling = async () => {
    setIsLoading(true);
    try {
      // Implement billing update logic
      await new Promise(resolve => setTimeout(resolve, 1000));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Billing Settings</h2>
        <p className="text-gray-600">Manage your billing information and view payment history</p>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Current Plan</h3>
              <p className="text-sm text-gray-500">Pro Plan</p>
            </div>
            <Button variant="outline">Change Plan</Button>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Payment Method</h3>
            <div className="flex items-center space-x-4">
             
              <div>
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-500">Expires 12/24</p>
              </div>
              <Button variant="ghost" size="sm">Edit</Button>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Billing History</h3>
            <div className="space-y-2">
              {[
                { date: '2024-03-01', amount: '$49.99', status: 'Paid' },
                { date: '2024-02-01', amount: '$49.99', status: 'Paid' },
                { date: '2024-01-01', amount: '$49.99', status: 'Paid' },
              ].map((invoice, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span>{invoice.date}</span>
                  <span>{invoice.amount}</span>
                  <span className="text-green-600">{invoice.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Button
        onClick={handleUpdateBilling}
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? (
          <>
            
            Updating...
          </>
        ) : (
          'Update Billing Information'
        )}
      </Button>
    </div>
  );
}