// src/pages/InventoryPage.js

import React, { useState, useEffect } from 'react';
import Inventory from '../components/Inventory';
import { getInventory } from '../services/api';

const InventoryPage = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const data = await getInventory();
      setInventory(data);
    };
    fetchInventory();
  }, []);

  return (
    <div>
      <h1>Inventory</h1>
      <Inventory inventory={inventory} />
    </div>
  );
};

export default InventoryPage;