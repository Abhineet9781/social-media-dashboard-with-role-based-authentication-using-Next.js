'use client';

import Image from "next/image";
import { useAuth } from "./hooks/useAuth";
import LoginForm from "./_components/Auth/LoginForm";
import ProtectedRoute from "./_components/Auth/ProtectedRoute";
import Link from "next/link";

export default function Home() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-md">
         
          <div className="w-full">
            <LoginForm />
          </div>
         
        </main>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
          {/* Top Section */}
          <div className="flex justify-between w-full items-center">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <div className="flex items-center gap-2">
              <span className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                {user?.role}
              </span>
              <span className="text-sm">{user?.email}</span>
            </div>
          </div>

          {/* Dashboard Section */}
          <div className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">
              Welcome to your {user?.role} Dashboard
            </h1>

            {user?.role === 'admin' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/app/admin/dashboard" className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <h3 className="font-medium">Admin Dashboard</h3>
                </Link>
                <Link href="/admin/users" className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <h3 className="font-medium">User Management</h3>
                </Link>
                <Link href="/admin/posts" className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <h3 className="font-medium">Post Moderation</h3>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/user/dashboard" className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <h3 className="font-medium">User Dashboard</h3>
                </Link>
                <Link href="/user/profile" className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <h3 className="font-medium">Profile</h3>
                </Link>
                <Link href="/user/settings" className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <h3 className="font-medium">Settings</h3>
                </Link>
              </div>
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
