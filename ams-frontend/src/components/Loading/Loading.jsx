import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white p-5 rounded-lg shadow-lg flex items-center space-x-3">
        <div className="w-10 h-10 border-4 border-t-4 border-gray-900 rounded-full animate-spin"></div>
        <div>Loading...</div>
        </div>
    </div>
  );
}

export default Loading;