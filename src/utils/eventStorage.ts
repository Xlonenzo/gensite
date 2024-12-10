import { v4 as uuidv4 } from 'uuid';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  image?: string;
  capacity: number;
  registrations: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export function saveEvent(event: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Event {
  const events = getEvents();
  const now = new Date().toISOString();
  const newEvent: Event = {
    ...event,
    id: uuidv4(),
    createdAt: now,
    updatedAt: now,
  };
  
  events.push(newEvent);
  localStorage.setItem('events', JSON.stringify(events));
  return newEvent;
}

export function getEvents(): Event[] {
  const events = localStorage.getItem('events');
  return events ? JSON.parse(events) : [];
}

export function deleteEvent(id: string): void {
  const events = getEvents().filter(event => event.id !== id);
  localStorage.setItem('events', JSON.stringify(events));
}

export function updateEvent(id: string, updates: Partial<Event>): Event | null {
  const events = getEvents();
  const index = events.findIndex(event => event.id === id);
  
  if (index === -1) return null;
  
  const updatedEvent = {
    ...events[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  events[index] = updatedEvent;
  localStorage.setItem('events', JSON.stringify(events));
  return updatedEvent;
}