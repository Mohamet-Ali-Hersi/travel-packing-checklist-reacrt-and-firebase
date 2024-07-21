import React from 'react';
import PackingList from '../components/PackingList';
const Home = () => {
  return (
    
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Welcome to the Travel Packing Checklist</h1>
      <p className="mt-4">Organize your travel packing efficiently!</p>
      <PackingList />
    </div>
  );
};

export default Home;