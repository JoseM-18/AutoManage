import React, { useState, useEffect } from 'react';
import Inventory from '../components/Inventory';
import api from '../services/api';

function InventoryPage() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    async function fetchInventory() {
      const data = await api.getInventory();
      setInventory(data);
    }
    fetchInventory();
  }, []);

  return (
    <div>
      <h1>Inventory</h1>
      <Inventory inventory={inventory} />
    </div>
  );
}

export default InventoryPage;