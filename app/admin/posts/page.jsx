export default function PostModeration() {
  const mockPosts = [
    { id: 1, title: 'Post 1', status: 'approved', author: 'user1' },
    { id: 2, title: 'Post 2', status: 'pending', author: 'user2' },
    { id: 3, title: 'Post 3', status: 'reported', author: 'user3' },
  ];

  return (
    <div className="px-6 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Post Moderation</h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-6 border-b border-gray-300">ID</th>
              <th className="py-3 px-6 border-b border-gray-300">Title</th>
              <th className="py-3 px-6 border-b border-gray-300">Author</th>
              <th className="py-3 px-6 border-b border-gray-300">Status</th>
              <th className="py-3 px-6 border-b border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockPosts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="py-3 px-6 border-b border-gray-300 text-gray-900">{post.id}</td>
                <td className="py-3 px-6 border-b border-gray-300 text-gray-900">{post.title}</td>
                <td className="py-3 px-6 border-b border-gray-300 text-gray-900">{post.author}</td>
                <td className="py-3 px-6 border-b border-gray-300">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      post.status === 'approved'
                        ? 'bg-green-200 text-green-800'
                        : post.status === 'pending'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="py-3 px-6 border-b border-gray-300 flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200">Review</button>
                  <button className="text-red-600 hover:text-red-800 transition-colors duration-200">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
