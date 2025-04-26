import ProtectedRoute from '../_components/Auth/ProtectedRoute';
import Sidebar from '../_components/Dashboard/Sidebar';
import Topbar from '../_components/Dashboard/Topbar';

export default function UserLayout({ children }) {
  const userLinks = [
    { name: 'Dashboard', href: '/user/dashboard' },
    { name: 'Profile', href: '/user/profile' },
    { name: 'Settings', href: '/user/settings' },
  ];

  return (
    <ProtectedRoute requiredRole="user">
      <div className="flex h-screen bg-gray-50">
        <Sidebar links={userLinks} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Topbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}