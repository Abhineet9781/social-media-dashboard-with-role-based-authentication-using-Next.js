'use client';
import { useAuth } from '../../hooks/useAuth';

export default function Topbar() {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">{user?.email}</span>
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center shadow-inner">
            <span className="text-lg font-semibold text-gray-800">
              {user?.email?.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
