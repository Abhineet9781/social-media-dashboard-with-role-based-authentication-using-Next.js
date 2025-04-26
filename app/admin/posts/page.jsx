'use client'
import { useState } from 'react';

export default function PostModeration() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post 1', status: 'approved', author: 'user1' },
    { id: 2, title: 'Post 2', status: 'pending', author: 'user2' },
    { id: 3, title: 'Post 3', status: 'reported', author: 'user3' },
  ]);

  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleReview = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  const handleStatusChange = (newStatus) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === selectedPost.id ? { ...post, status: newStatus } : post
      )
    );
    setShowModal(false);
  };

  return (
    <div className="px-6 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Post Moderation</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-6 border-b border-gray-300 text-left">ID</th>
              <th className="py-3 px-6 border-b border-gray-300 text-left">Title</th>
              <th className="py-3 px-6 border-b border-gray-300 text-left">Author</th>
              <th className="py-3 px-6 border-b border-gray-300 text-left">Status</th>
              <th className="py-3 px-6 border-b border-gray-300 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="py-3 px-6 border-b border-gray-300 text-gray-900 text-left">{post.id}</td>
                <td className="py-3 px-6 border-b border-gray-300 text-gray-900 text-left">{post.title}</td>
                <td className="py-3 px-6 border-b border-gray-300 text-gray-900 text-left">{post.author}</td>
                <td className="py-3 px-6 border-b border-gray-300 text-left">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${post.status === 'approved'
                        ? 'bg-green-200 text-green-800'
                        : post.status === 'pending'
                          ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-red-200 text-red-800'
                      }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="py-3 px-6 border-b border-gray-300 text-left">
                  <div className="flex space-x-2">
                    <button
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      onClick={() => handleReview(post)}
                    >
                      Review
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 transition-colors duration-200"
                      onClick={() => handleDelete(post.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {showModal && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Review Post</h2>
            <p className="mb-4"><strong>Title:</strong> {selectedPost.title}</p>
            <div className="flex flex-col space-y-3">
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 rounded"
                onClick={() => handleStatusChange('approved')}
              >
                Approve
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded"
                onClick={() => handleStatusChange('pending')}
              >
                Pending
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 rounded"
                onClick={() => handleStatusChange('reported')}
              >
                Report
              </button>
              <button
                className="mt-2 text-gray-600 hover:text-gray-800 underline"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
