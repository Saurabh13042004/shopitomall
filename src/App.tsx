import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { AdminLayout } from './components/AdminLayout';
import { Dashboard } from './pages/Dashboard';
import { ResponsesPage } from './pages/ResponsesPage';
import LoginPage from './pages/LoginPage.tsx';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="responses" element={<ResponsesPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;