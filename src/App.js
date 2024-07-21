import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signin from './Pages/SignIn';
import Signup from './Pages/SignUp';
import PackingList from './components/PackingList';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/packing-list" element={<PackingList/>} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;