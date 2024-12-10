import { openDB } from 'idb';

interface Admin {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'editor';
  lastLogin: string;
}

const AUTH_TOKEN_KEY = 'admin_token';
const DB_NAME = 'AdminDB';

// Initialize the admin database
async function initAdminDB() {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('admins')) {
        const store = db.createObjectStore('admins', { keyPath: 'username' });
        store.createIndex('email', 'email', { unique: true });
        
        // Create default admin account
        store.put({
          username: 'admin',
          email: 'admin@gen.org',
          password: 'admin123', // In production, use hashed passwords
          role: 'admin',
          lastLogin: new Date().toISOString()
        });
      }
    },
  });
  return db;
}

export async function login(username: string, password: string): Promise<boolean> {
  try {
    const db = await initAdminDB();
    const admin = await db.get('admins', username);

    if (admin && admin.password === password) { // In production, use proper password comparison
      const { password: _, ...adminData } = admin;
      
      // Update last login
      await db.put('admins', {
        ...admin,
        lastLogin: new Date().toISOString()
      });

      // Store auth token
      localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(adminData));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
}

export function logout(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function getAdmin(): Admin | null {
  const data = localStorage.getItem(AUTH_TOKEN_KEY);
  return data ? JSON.parse(data) : null;
}

export function isAuthenticated(): boolean {
  return getAdmin() !== null;
}

export function hasPermission(requiredRole: 'admin' | 'editor'): boolean {
  const admin = getAdmin();
  if (!admin) return false;
  
  if (requiredRole === 'admin') {
    return admin.role === 'admin';
  }
  
  return ['admin', 'editor'].includes(admin.role);
}