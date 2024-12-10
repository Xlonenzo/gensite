import React from 'react';
import { Outlet } from 'react-router-dom';

export function ServicesLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
}