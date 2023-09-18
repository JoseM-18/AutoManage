import React, { useState, useEffect } from 'react';
import { getOrder } from '../services/api';
import Order from '../components/Order';

const OrderPage = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await getOrder();
        setOrder(orderData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrder();
  }, []);

  return (
    <div>
      <h1>Order Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : order ? (
        <Order order={order} />
      ) : (
        <p>No order found.</p>
      )}
    </div>
  );
};

export default OrderPage;