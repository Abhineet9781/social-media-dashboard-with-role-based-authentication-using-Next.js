'use client';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function UserSettings() {
  const [notifications, setNotifications] = useState(true);
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Update localStorage with new credentials
    const authData = JSON.parse(localStorage.getItem('auth'));
    const updatedAuthData = {
      ...authData,
      password: newPassword // Note: In real apps, never store plain passwords
    };
    localStorage.setItem('auth', JSON.stringify(updatedAuthData));

    // Reset form
    setNewPassword('');
    setConfirmPassword('');
    setError('');
    setShowPasswordPopup(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
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
          <button 
            onClick={() => setShowPasswordPopup(true)}
            className="text-blue-500 hover:underline"
          >
            Click here to change your password
          </button>
        </div>
      </div>

      {/* Password Change Popup */}
      {showPasswordPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Change Password</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={user?.email || ''}
                readOnly
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            
            {error && <p className="text-red-500 mb-4">{error}</p>}
            
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setShowPasswordPopup(false);
                  setError('');
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordChange}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}