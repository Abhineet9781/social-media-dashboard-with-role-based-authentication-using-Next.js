'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function UserProfile() {
  const { user } = useAuth();
  const [name, setName] = useState(localStorage.getItem('name') || 'John Doe');
  const [email, setEmail] = useState(localStorage.getItem('email') || user?.email || '');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setName(localStorage.getItem('name') || 'John Doe');
    setEmail(localStorage.getItem('email') || user?.email || '');
  }, [user?.email]);

  const handleSaveChanges = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    setIsEditing(false);  
  };

  const handleEdit = () => {
    setIsEditing(true);  
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile</h1>

      {isEditing ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <button
            onClick={handleSaveChanges}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      ) : (
        <div>
          <div className="bg-white p-6 rounded-lg shadow mb-4">
            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-gray-600">{email}</p>
          </div>
          <button
            onClick={handleEdit}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
