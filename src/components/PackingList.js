import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
//import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const PackingList = ({user}) => {
  //const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(
        collection(db, 'users', user.uid, 'packingList'),
        (snapshot) => {
          setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      );
      return () => unsubscribe();
    }
  }, [user]);

  const handleAddItem = async () => {
    if (newItem.trim() !== '') {
      try {
        await addDoc(collection(db, 'users', user.uid, 'packingList'), { text: newItem });
        setNewItem('');
        toast.success('Item added successfully!');
      } catch (error) {
        toast.error('Failed to add item.');
      }
    }
  };

  const handleUpdateItem = async (id, newText) => {
    try {
      await updateDoc(doc(db, 'users', user.uid, 'packingList', id), { text: newText });
      toast.success('Item updated successfully!');
    } catch (error) {
      toast.error('Failed to update item.');
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'packingList', id));
      toast.success('Item deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete item.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">My Packing List</h1>
      <div className="mt-4 flex">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
        <button onClick={handleAddItem} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
          Add
        </button>
      </div>
      <ul className="mt-4">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center p-2 border-b">
            <input
              type="text"
              value={item.text}
              onChange={(e) => handleUpdateItem(item.id, e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mr-2"
            />
            <button onClick={() => handleDeleteItem(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;