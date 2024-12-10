import React from 'react';
import { AdvocacyHero } from '../components/advocacy/AdvocacyHero';
import { AdvocacyInitiatives } from '../components/advocacy/AdvocacyInitiatives';
import { AdvocacySummit } from '../components/advocacy/AdvocacySummit';

export function Advocacy() {
  return (
    <>
      <AdvocacyHero />
      <AdvocacyInitiatives />
      <AdvocacySummit />
    </>
  );
}