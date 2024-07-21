import React, { useState } from 'react';
import {  useNavigate  } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
      toast.success('Signed up successfully!');
    } catch (error) {
      toast.error('Failed to sign up. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;