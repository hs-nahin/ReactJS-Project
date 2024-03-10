import 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-xl text-gray-700 mb-8">Something went wrong.</p>
        <button
          className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
