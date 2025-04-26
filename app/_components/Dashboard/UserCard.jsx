'use client';
import { useState } from 'react';

export default function UserCard({ user }) {
  const [isActive, setIsActive] = useState(user.isActive);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{user.email}</h3>
          <p className="text-sm text-gray-500 mt-1 capitalize">{user.role}</p>
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
          onClick={() => setIsActive(!isActive)}
          className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300
            bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
        >
          {isActive ? 'Deactivate' : 'Activate'}
        </button>
        <button
          className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300
            bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
