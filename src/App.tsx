import ApiTest from './components/APITest';

function App() {
  return (
    <div>
      <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Welcome to your React Training Course!
        </h2>
        <p className="text-gray-600 mb-4">This is rendering with TailwindCSS!</p>
        <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors duration-300">
          This button should be blue!
        </button>
      </div>

      <ApiTest />
    </div>
  );
}

export default App;
