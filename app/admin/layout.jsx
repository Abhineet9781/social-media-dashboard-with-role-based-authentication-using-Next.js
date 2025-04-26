import ProtectedRoute from '../_components/Auth/ProtectedRoute';
import Sidebar from '../_components/Dashboard/Sidebar';
import Topbar from '../_components/Dashboard/Topbar';

export default function AdminLayout({ children }) {
  const adminLinks = [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'User Management', href: '/admin/users' },
    { name: 'Post Moderation', href: '/admin/posts' },
  ];

  return (
    <ProtectedRoute requiredRole="admin">
      <div className="flex h-screen bg-gray-50">
        <Sidebar links={adminLinks} />
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