export const API_BASE = 'https://68397deb6561b8d882b09d9c.mockapi.io/ecom';

export const endpoints = {
  products: `${API_BASE}/products`,
  users: `${API_BASE}/users`,
  product: (id) => `${API_BASE}/products/${id}`,
};
