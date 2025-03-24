import { lazy } from 'react';
import './App.css';
import ClientLayout from './layouts/ClientLayout';
import AppLayout from './layouts/AppLayout';
import UserLayout from './layouts/UserLayout';
import { Routes, Route } from 'react-router-dom';
import Runner from './components/table/Runner';
import Tracker from './components/ui/Tracker';

const LoginPage = lazy(() => import('./pages/Login'));
const RegisterPage = lazy(() => import('./pages/Register'));

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<ClientLayout />}>
          <Route index element={<> Client hello page </>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<>404 page</>} />
        </Route>
        <Route path='/home' element={<UserLayout />}>
          <Route index element={<>User home page</>} />
          <Route path='runner' element={<UserLayout />}>
            <Route path=':runnerId' element={<UserLayout />}>
              <Route index element={<Runner />} />
              <Route path='tracker/:trackerId' element={<Tracker />} />
            </Route>
          </Route>
          <Route path='*' element={<>404 page</>} />
        </Route>
      </Routes>
    </AppLayout>
  );
}

export default App;
