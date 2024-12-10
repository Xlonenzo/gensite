import React from 'react';
import { Hero } from '../components/home/Hero';
import { MissionStatement } from '../components/home/MissionStatement';
import { Services } from '../components/home/Services';
import { Mission } from '../components/home/Mission';

export function Home() {
  return (
    <main>
      <Hero />
      <MissionStatement />
      <Services />
      <Mission />
    </main>
  );
}