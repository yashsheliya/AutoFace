// src/App.js
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './Style/style.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword'; // Import the ForgotPassword component
import Dashboard from './Dashboard/Dashboard';
import Header from './Web-Layouts/Header/Header';
import Footer from './Web-Layouts/Footer/Footer';
import ScriptManager from './Dashboard/Script_Manager/ScriptManager';
import Settings from './Dashboard/Settings/Settings';
import NewScript from './Dashboard/Script_Manager/NewScript/NewScript';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import ProtectedRoute from './components/ProtectedRoute';
import RedirectIfAuthenticated from './components/RedirectIfAuthenticated'; // Import the RedirectIfAuthenticated component
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';

const AppLayout = () => {
  const location = useLocation(); // This hook retrieves the current location

  const hideHeaderFooter =
    location.pathname.startsWith('/dashboard') ||
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/forgot-password' ;

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <RedirectIfAuthenticated>
              <Login />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectIfAuthenticated>
              <Signup />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <RedirectIfAuthenticated>
              <ForgotPassword />
            </RedirectIfAuthenticated>
          }
        /> {/* Forgot Password Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/script-manager"
          element={
            <ProtectedRoute>
              <ScriptManager />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/new-script"
          element={
            <ProtectedRoute>
              <NewScript />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <AuthProvider> {/* Move AuthProvider inside the Router */}
          <AppLayout />
        </AuthProvider>
      </Router>
      <ToastContainer toastStyle={{fontFamily: 'Inter, sans-serif'}} />
    </>
  );
}

export default App;
