export default function Search({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
    />
  );
}
