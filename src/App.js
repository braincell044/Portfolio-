import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './AuthContext';
import Ugobueze from './Portfolio'

function App() {
  return (
<div>
<Ugobueze/>
<Router>
      

      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/" element={<Dashboard />} /> */}
          </Route>
        </Routes>
      </AuthProvider>

    </Router>

</div>
  );
}

export default App;