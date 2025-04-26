'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';

export default function Sidebar({ links }) {
  const pathname = usePathname();
  const { signOut } = useAuth();

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white shadow-lg">
      <div className="p-6 h-full flex flex-col">
        <h2 className="text-2xl font-bold mb-10 text-center tracking-wide">Dashboard</h2>
        <nav className="flex-1">
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-all duration-300 hover:bg-gray-600 hover:scale-[1.02] ${
                    pathname === link.href ? 'bg-gray-600 scale-[1.02]' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={signOut}
          className="mt-auto w-full px-5 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-lg text-center font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
