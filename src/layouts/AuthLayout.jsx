import { Outlet } from 'react-router-dom';
import LogoRemove from '../assets/img/Logo-Remove.png';
export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <div className="flex items-center justify-center my-10">
            <img src={LogoRemove} alt="About Sedap" className="rounded-xl shadow-sm object-cover w-30 max-w-md mx-auto" style={{ maxHeight: '400px' }} />
        </div>

        <Outlet />

        <p className="text-center text-sm text-gray-500 mt-6">© 2025 Sedap Restaurant Admin Dashboard. All rights reserved.</p>
      </div>
    </div>
  );
}
