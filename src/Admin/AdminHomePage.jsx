import { Routes, Route } from 'react-router-dom';
import AdminAddProducts from './AdminAddProducts';
import AdminViewItems from './AdminViewItems';
import AdminDashboard from './AdminDashboard';
import AdminNavbar from './AdminNavbar';
import Adminfooter from './Adminfooter';
import UpdateProducts from './UpdateProducts';
import '../Style/AdminHomepage.css';

const AdminHomePage = () => (
  <div className="Adminhomepage">
    <AdminNavbar />
    <main className="admin-main">
      <Routes>
        <Route index element={<AdminDashboard />} />
        <Route path="viewitems" element={<AdminViewItems />} />
        <Route path="addproducts" element={<AdminAddProducts />} />
        <Route path="updateProduct/:id" element={<UpdateProducts />} />
      </Routes>
    </main>
    <Adminfooter />
  </div>
);

export default AdminHomePage;
