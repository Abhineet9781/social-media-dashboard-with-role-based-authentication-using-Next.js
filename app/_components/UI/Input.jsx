export default function Input({ label, id, ...props }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-800 mb-2">
        {label}
      </label>
      <input
        id={id}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400 transition-all duration-300"
        {...props}
      />
    </div>
  );
}
