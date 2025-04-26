'use client';
import { useState } from 'react';

export default function UserCard({ user }) {
  const [isActive, setIsActive] = useState(user.isActive);
  const [userData, setUserData] = useState({ email: user.email, role: user.role });
  const [isEditing, setIsEditing] = useState(false);

  // Handle Save
  const handleSave = () => {
    // Save the updated data
    setIsEditing(false);

    // Store the updated data to localStorage to persist after refresh
    localStorage.setItem(`user-${user.email}`, JSON.stringify({ ...userData, isActive }));
  };

  // Load saved data if exists
  useState(() => {
    const savedUser = localStorage.getItem(`user-${user.email}`);
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setUserData({ email: parsed.email, role: parsed.role });
      setIsActive(parsed.isActive);
    }
  });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-semibold text-gray-800 ">{userData.email}</h3>
          <p className="text-sm text-gray-500 mt-1 capitalize">{userData.role}</p>
        </div>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${
            isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {isActive ? 'Active' : 'Inactive'}
        </span>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => {
            setIsActive(!isActive);
            localStorage.setItem(
              `user-${user.email}`,
              JSON.stringify({ ...userData, isActive: !isActive })
            );
          }}
          className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300
            bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
        >
          {isActive ? 'Deactivate' : 'Activate'}
        </button>
        <button
          onClick={() => setIsEditing(true)}
          className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300
            bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95"
        >
          Edit
        </button>
      </div>

      {/* Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Edit User</h2>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                className="border rounded-lg p-2"
                placeholder="Email"
              />
              <input
                type="text"
                value={userData.role}
                onChange={(e) => setUserData({ ...userData, role: e.target.value })}
                className="border rounded-lg p-2"
                placeholder="Role"
              />
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
