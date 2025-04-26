'use client';
import { useState } from 'react';

export default function UserSettings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-gray-700">Dark Mode</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="h-5 w-5 text-blue-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-gray-700">Email Notifications</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="h-5 w-5 text-blue-500"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-700 mb-2">Change Password</h3>
          <button className="text-blue-500 hover:underline">
            Click here to change your password
          </button>
        </div>
      </div>
    </div>
  );
}