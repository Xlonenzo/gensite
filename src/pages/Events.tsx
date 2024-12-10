import React from 'react';
import { EventsHero } from '../components/events/EventsHero';
import { EventsList } from '../components/events/EventsList';
import { EventsCalendar } from '../components/events/EventsCalendar';
import { EventsNewsletter } from '../components/events/EventsNewsletter';

export function Events() {
  return (
    <>
      <EventsHero />
      <EventsList />
      <EventsCalendar />
      <EventsNewsletter />
    </>
  );
}