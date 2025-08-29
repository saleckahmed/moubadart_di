import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav dir="rtl" className="bg-white shadow-sm fixed top-0 w-full z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-medium text-gray-800">
          مبادرة دفعة المعلوماتية
        </Link>

        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-gray-600 transition text-gray-800">الرئيسية</Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-gray-600 transition text-gray-800">الفعاليات</Link>
          </li>
          <li>
            <Link to="/members" className="hover:text-gray-600 transition text-gray-800">المعرض</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-600 transition text-gray-800">اتصل بنا</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl focus:outline-none text-gray-800"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 flex flex-col space-y-3 py-4 px-6">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-600 transition text-gray-800 block py-2">الرئيسية</Link>
          </li>
          <li>
            <Link to="/events" onClick={() => setIsOpen(false)} className="hover:text-gray-600 transition text-gray-800 block py-2">الفعاليات</Link>
          </li>
          <li>
            <Link to="/members" onClick={() => setIsOpen(false)} className="hover:text-gray-600 transition text-gray-800 block py-2">المعرض</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-600 transition text-gray-800 block py-2">اتصل بنا</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;