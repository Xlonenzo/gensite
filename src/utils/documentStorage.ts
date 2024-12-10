import { v4 as uuidv4 } from 'uuid';
import { getDB } from './indexedDB';

export interface Document {
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
}

export async function saveDocument(doc: Omit<Document, 'id' | 'dateUploaded'>): Promise<Document> {
  const db = await getDB();
  const newDoc: Document = {
    ...doc,
    id: uuidv4(),
    dateUploaded: new Date().toISOString(),
  };
  
  await db.put('documents', newDoc);
  return newDoc;
}

export async function getDocuments(): Promise<Document[]> {
  const db = await getDB();
  return db.getAll('documents');
}

export async function deleteDocument(id: string): Promise<void> {
  const db = await getDB();
  await db.delete('documents', id);
}

export async function getDocumentById(id: string): Promise<Document | undefined> {
  const db = await getDB();
  return db.get('documents', id);
}