const Loading = () => (
  <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#f6f6f5]">
    {/* Simple animated dots loader */}
    <div className="flex space-x-2">
      <span className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:-0.3s]" />
      <span className="w-3 h-3 rounded-full bg-black animate-bounce [animation-delay:-0.15s]" />
      <span className="w-3 h-3 rounded-full bg-black animate-bounce" />
    </div>
    <span className="mt-6 text-sm text-gray-500 font-medium tracking-wide">
      Loading...
    </span>
  </div>
);

export default Loading;