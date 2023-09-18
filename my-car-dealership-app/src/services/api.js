const API_URL = process.env.REACT_APP_API_URL;

async function fetchInventory() {
  const response = await fetch(`${API_URL}/inventory`);
  const data = await response.json();
  return data;
}

async function fetchOrder(id) {
  const response = await fetch(`${API_URL}/orders/${id}`);
  const data = await response.json();
  return data;
}

async function createOrder(order) {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  return data;
}

async function updateOrder(id, order) {
  const response = await fetch(`${API_URL}/orders/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  return data;
}

export { fetchInventory, fetchOrder, createOrder, updateOrder };