import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../services/api';
import Order from '../components/Order';

const OrderPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const data = await getOrder(id);
      setOrder(data);
    };
    fetchOrder();
  }, [id]);

  return (
    <div>
      {order ? (
        <Order order={order} />
      ) : (
        <p>Loading order...</p>
      )}
    </div>
  );
};

export default OrderPage;