import React from 'react';
import { History } from '../components/about/History';
import { Governance } from '../components/about/Governance';
import { Commitment } from '../components/about/Commitment';

export function About() {
  return (
    <>
      <History />
      <Governance />
      <Commitment />
    </>
  );
}