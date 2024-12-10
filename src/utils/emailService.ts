import { v4 as uuidv4 } from 'uuid';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

// Simula o envio do e-mail e armazena localmente
export async function sendContactMessage(data: Omit<ContactMessage, 'id' | 'date'>): Promise<ContactMessage> {
  const message: ContactMessage = {
    ...data,
    id: uuidv4(),
    date: new Date().toISOString()
  };

  // Armazena a mensagem no localStorage
  const messages = getMessages();
  messages.push(message);
  localStorage.setItem('contactMessages', JSON.stringify(messages));

  // Simula um delay de envio
  await new Promise(resolve => setTimeout(resolve, 1000));

  return message;
}

export function getMessages(): ContactMessage[] {
  const stored = localStorage.getItem('contactMessages');
  return stored ? JSON.parse(stored) : [];
}