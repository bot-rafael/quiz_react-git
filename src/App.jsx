import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import './assets/tailwind.css';
import Loading from './components/Loading';
const Login = React.lazy(() => import('./pages/auth/Login'));
const Register = React.lazy(() => import('./pages/auth/Register'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const CekStok = React.lazy(() => import('./pages/CekStok'));
const GuestLayout = React.lazy(() => import('./layouts/GuestLayout'));
const AuthLayout = React.lazy(() => import('./layouts/AuthLayout'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Layout untuk halaman utama setelah login */}
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='stock' element={<CekStok/>} />
        </Route>

        {/* Layout untuk halaman login, register, dll */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
