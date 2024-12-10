import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated, hasPermission } from '../../utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'editor';
}

export function ProtectedRoute({ children, requiredRole = 'editor' }: ProtectedRouteProps) {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  if (!hasPermission(requiredRole)) {
    return <Navigate to="/admin/unauthorized" replace />;
  }

  return <>{children}</>;
}