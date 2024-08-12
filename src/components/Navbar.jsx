import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    setIsLoggedIn(loggedIn === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div>
            {/* <Link to="/">
              <img src={Logo} className="h-14" alt="Logo" />
            </Link> */}
            <h1 className="text-3xl text-[#1f285d]">logo</h1>
          </div>
          <div className="lg:hidden">
            <button
              className="text-gray-700 hover:text-[#1f285d] focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="hidden lg:flex lg:items-center lg:space-x-4 gap-7">
            <Link
              // to="/OurService"
              className="text-gray-700 hover:text-[#1f285d] transform transition-transform duration-300 hover:scale-105"
            >
              الخدمات
            </Link>
            <Link
              // to="/AboutUs"
              className="text-gray-700 hover:text-[#1f285d] transform transition-transform duration-300 hover:scale-105"
            >
              عن الشركة
            </Link>
            <Link
              to="/"
              className="text-gray-700 hover:text-[#1f285d] transform transition-transform duration-300 hover:scale-105"
            >
              الصفحة الرئيسية
            </Link>
          </nav>
          <div className="hidden lg:flex lg:space-x-2">
            {isLoggedIn ? (
              <div className="flex gap-3">
                <button
                  className="bg-[#1f285d] hover:bg-[#324094] transform transition-transform duration-300 hover:scale-105 text-white px-4 py-2 rounded"
                  onClick={handleLogout}
                >
                  تسجيل خروج
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link to="/Signin">
                  <button className="text-[#1f285d] border hover:border-[#324094] border-[#1f285d] hover:text-[#324094] px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105">
                    إنشاء حساب
                  </button>
                </Link>
                <Link to="/Login">
                  <button className="bg-[#1f285d] hover:bg-[#324094] text-white px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105">
                    تسجيل دخول
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Drawer */}
        <div
          className={`fixed inset-0 z-50 bg-black bg-opacity-50 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 lg:hidden`}
        >
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-md p-6">
            <button
              className="text-gray-700 hover:text-[#1f285d] focus:outline-none mb-6"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <nav className="flex flex-col space-y-4">
              <Link
                // to="/OurService"
                className="text-gray-700 hover:text-[#1f285d] transform transition-transform duration-300 hover:scale-105"
              >
                الخدمات
              </Link>
              <Link
                // to="/AboutUs"
                className="text-gray-700 hover:text-[#1f285d] transform transition-transform duration-300 hover:scale-105"
              >
                عن الشركة
              </Link>
              <Link
                to="/"
                className="text-gray-700 hover:text-[#1f285d] transform transition-transform duration-300 hover:scale-105"
              >
                الصفحة الرئيسية
              </Link>
              {isLoggedIn ? (
                <button
                  className="bg-[#1f285d] hover:bg-[#324094] transform transition-transform duration-300 hover:scale-105 text-white px-4 py-2 rounded"
                  onClick={handleLogout}
                >
                  تسجيل خروج
                </button>
              ) : (
                <div className="flex flex-col space-y-3">
                  <Link to="/Signin">
                    <button className="text-[#1f285d] border hover:border-[#324094] border-[#1f285d] hover:text-[#324094] px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105">
                      إنشاء حساب
                    </button>
                  </Link>
                  <Link to="/Login">
                    <button className="bg-[#1f285d] hover:bg-[#324094] text-white px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105">
                      تسجيل دخول
                    </button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
