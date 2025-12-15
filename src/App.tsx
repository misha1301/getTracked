import { lazy } from 'react';
import './App.css';
import ClientLayout from './layouts/ClientLayout';
import AppLayout from './layouts/AppLayout';
import UserLayout from './layouts/UserLayout';
import { Routes, Route } from 'react-router-dom';
import Runner from './components/table/Runner';
import RunnerPageLayout, {RunnerList} from '@/pages/Runner.tsx';
import RulesPageLayout, {RulesList} from '@/pages/RulesPage.tsx';

const LoginPage = lazy(() => import('./pages/Login'));
const RegisterPage = lazy(() => import('./pages/Register'));
const RulesPage = lazy(()=> import('./pages/RulesPage.tsx'))


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
          <Route index element={<div className='h-[800px] bg-[#2f2f2f] rounded-2xl'>User home page</div>} />
          <Route path='runners' element={<RunnerPageLayout />}>
            <Route index element={<RunnerList />} />
            <Route path=':runnerId' element={<UserLayout />}>
              <Route index element={<Runner />} />
              <Route path='tracker/:trackerId' element={<>tracker</>} />
            </Route>
          </Route>
          <Route path='rules' element={<RulesPageLayout />}>
            <Route index element={<RulesList />} />
            <Route path=':ruleId' element={<UserLayout />}>
              <Route index element={<RulesList />} />
            </Route>
          </Route>
          <Route path='*' element={<>404 page</>} />
        </Route>
      </Routes>
    </AppLayout>
  );
}

export default App;
