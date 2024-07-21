import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'
//import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = ({ user }) => {
  //const [user] = useAuthState(auth);
  
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // const handleLogout = () => {
  //   signOut(auth).then(() => {
  //     navigate('/signin');
  //   });
  // };
  const handleLogout = async () => {
    await signOut(auth);
    navigate('/signin');
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Travel Packing Checklist</div>
        <div className="hidden md:flex">
          <Link className="mx-2" to="/">Home</Link>
          <Link className="mx-2" to="/about">About</Link>
          <Link className="mx-2" to="/contact">Contact</Link>
          {user ? (
            <>
              <Link className="mx-2" to="/packing-list">Packing List</Link>
              <button onClick={handleLogout} className="mx-2">Logout</button>
            </>
          ) : (
            <>
              <Link className="mx-2" to="/signin">Sign In</Link>
              <Link className="mx-2" to="/signup">Sign Up</Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link className="block px-4 py-2" to="/">Home</Link>
          <Link className="block px-4 py-2" to="/about">About</Link>
          <Link className="block px-4 py-2" to="/contact">Contact</Link>
          {user ? (
            <>
              <Link className="block px-4 py-2" to="/packing-list">Packing List</Link>
              <button onClick={handleLogout} className="block px-4 py-2 text-left w-full">Logout</button>
            </>
          ) : (
            <>
              <Link className="block px-4 py-2" to="/signin">Sign In</Link>
              <Link className="block px-4 py-2" to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;