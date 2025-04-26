import UserCard from '../../_components/Dashboard/UserCard';

async function getUsers() {
  const res = await fetch('http://localhost:3000/api/users');
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}

export default async function UserManagement() {
  const users = await getUsers();

  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">User Management</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
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