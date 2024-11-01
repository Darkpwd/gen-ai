'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <div>Profile Settings Content</div>;
      case 'notifications':
        return <div>Notification Settings Content</div>;
      case 'security':
        return <div>Security Settings Content</div>;
      case 'billing':
        return <div>Billing Settings Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-2 text-gray-600">Manage your account preferences and settings</p>
        </div>

        <Card className="p-1">
          <div className="grid grid-cols-4 gap-2 mb-4">
            <button onClick={() => setActiveTab('profile')} className="py-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300">Profile</button>
            <button onClick={() => setActiveTab('notifications')} className="py-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300">Notifications</button>
            <button onClick={() => setActiveTab('security')} className="py-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300">Security</button>
            <button onClick={() => setActiveTab('billing')} className="py-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300">Billing</button>
          </div>

          <div className="mt-4 p-4">
            {renderContent()}
          </div>
        </Card>
      </div>
    </div>
  );
}
