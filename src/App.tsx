import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Consultancy } from './pages/Consultancy';
import { Development } from './pages/Development';
import { Tourism } from './pages/Tourism';
import { Education } from './pages/Education';
import { Centers } from './pages/Centers';
import { Events } from './pages/Events';
import { Contact } from './pages/Contact';
import { Donate } from './pages/Donate';
import { Volunteer } from './pages/Volunteer';
import { Advocacy } from './pages/Advocacy';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { DocumentManagement } from './components/admin/DocumentManagement';
import { EventManagement } from './components/admin/EventManagement';
import { UserManagement } from './components/admin/UserManagement';
import { ProtectedRoute } from './components/admin/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="consultoria" element={<Consultancy />} />
        <Route path="advocacy" element={<Advocacy />} />
        <Route path="desenvolvimento" element={<Development />} />
        <Route path="turismo" element={<Tourism />} />
        <Route path="educacao" element={<Education />} />
        <Route path="centros" element={<Centers />} />
        <Route path="eventos" element={<Events />} />
        <Route path="contato" element={<Contact />} />
        <Route path="doe" element={<Donate />} />
        <Route path="voluntario" element={<Volunteer />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/documents"
        element={
          <ProtectedRoute>
            <DocumentManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/events"
        element={
          <ProtectedRoute>
            <EventManagement />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <ProtectedRoute requiredRole="admin">
            <UserManagement />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;