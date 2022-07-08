import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./components/views/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/routing/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth authRoute={'login'} />} />
          <Route path="/register" element={<Auth authRoute={'register'} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
          <ProtectedRoute
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
