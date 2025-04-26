import UserCard from '../../_components/Dashboard/UserCard';

const mockUsers = [
  { id: 1, email: 'admin@example.com', role: 'admin', isActive: true },
  { id: 2, email: 'user1@example.com', role: 'user', isActive: true },
  { id: 3, email: 'user2@example.com', role: 'user', isActive: false },
];

export default function UserManagement() {
  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">User Management</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            cardClassName={`${
              user.isActive ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300'
            } shadow-lg rounded-lg p-4 border transition duration-200 hover:scale-105`}
          />
        ))}
      </div>
    </div>
  );
}
