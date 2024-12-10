import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Calendar, Users, LogOut } from 'lucide-react';
import { logout } from '../../utils/auth';

export function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const modules = [
    {
      icon: FileText,
      title: 'Documentos',
      description: 'Gerenciar documentos e publicações',
      href: '/admin/documents'
    },
    {
      icon: Calendar,
      title: 'Eventos',
      description: 'Gerenciar eventos e agenda',
      href: '/admin/events'
    },
    {
      icon: Users,
      title: 'Usuários',
      description: 'Gerenciar usuários e permissões',
      href: '/admin/users'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Painel Administrativo
            </h1>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Sair
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module) => (
            <div
              key={module.title}
              className="bg-white overflow-hidden shadow rounded-lg cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(module.href)}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-brown-100 rounded-md p-3">
                    <module.icon className="h-6 w-6 text-brown-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {module.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}