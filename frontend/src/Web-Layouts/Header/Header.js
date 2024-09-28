// frontend/src/components/Header.js
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="logo">
        <h1 className="text-2xl">App Logo</h1>
      </div>
      <nav className="flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
