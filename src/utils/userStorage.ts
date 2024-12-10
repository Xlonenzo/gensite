import { v4 as uuidv4 } from 'uuid';

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
  lastLogin?: string;
}

export function saveUser(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): User {
  const users = getUsers();
  const now = new Date().toISOString();
  const newUser: User = {
    ...user,
    id: uuidv4(),
    createdAt: now,
    updatedAt: now,
  };
  
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  return newUser;
}

export function getUsers(): User[] {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

export function deleteUser(id: string): void {
  const users = getUsers().filter(user => user.id !== id);
  localStorage.setItem('users', JSON.stringify(users));
}

export function updateUser(id: string, updates: Partial<User>): User | null {
  const users = getUsers();
  const index = users.findIndex(user => user.id === id);
  
  if (index === -1) return null;
  
  const updatedUser = {
    ...users[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  users[index] = updatedUser;
  localStorage.setItem('users', JSON.stringify(users));
  return updatedUser;
}

export function updateLastLogin(id: string): void {
  const users = getUsers();
  const index = users.findIndex(user => user.id === id);
  
  if (index !== -1) {
    users[index].lastLogin = new Date().toISOString();
    localStorage.setItem('users', JSON.stringify(users));
  }
}