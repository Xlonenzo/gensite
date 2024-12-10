import React from 'react';
import { CentersHero } from '../components/centers/CentersHero';
import { CentersInfo } from '../components/centers/CentersInfo';
import { CentersList } from '../components/centers/CentersList';
import { CentersContact } from '../components/centers/CentersContact';

export function Centers() {
  return (
    <>
      <CentersHero />
      <CentersInfo />
      <CentersList />
      <CentersContact />
    </>
  );
}