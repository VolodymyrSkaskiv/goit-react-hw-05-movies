import UserRoutes from './UserRoutes/UserRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div>
      <UserRoutes />
      <ToastContainer />
    </div>
  );
};
