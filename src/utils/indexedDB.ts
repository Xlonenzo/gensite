import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface MyDB extends DBSchema {
  documents: {
    key: string;
    value: {
      id: string;
      title: string;
      category: string;
      description: string;
      fileName: string;
      fileSize: number;
      fileType: string;
      dateUploaded: string;
      author: string;
      content: string;
    };
  };
}

const DB_NAME = 'GENDocumentsDB';
const DB_VERSION = 1;

export async function initDB(): Promise<IDBPDatabase<MyDB>> {
  return openDB<MyDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('documents')) {
        db.createObjectStore('documents', { keyPath: 'id' });
      }
    },
  });
}

export async function getDB(): Promise<IDBPDatabase<MyDB>> {
  return initDB();
}