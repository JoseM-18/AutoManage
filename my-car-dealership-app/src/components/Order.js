import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../utils/formatDate';

function Order({ order }) {
  return (
    <div>
      <h2>Order Details</h2>
      <p><strong>Order ID:</strong> {order.id}</p>
      <p><strong>Customer Name:</strong> {order.customerName}</p>
      <p><strong>Car Model:</strong> {order.carModel}</p>
      <p><strong>Order Date:</strong> {formatDate(order.orderDate)}</p>
      <p><strong>Delivery Date:</strong> {formatDate(order.deliveryDate)}</p>
      <p><strong>Price:</strong> ${order.price}</p>
      <p><strong>Status:</strong> {order.status}</p>
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    customerName: PropTypes.string.isRequired,
    carModel: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
    deliveryDate: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Order;