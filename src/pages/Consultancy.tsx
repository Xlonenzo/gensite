import React from 'react';
import { ConsultancyHero } from '../components/consultancy/ConsultancyHero';
import { ConsultancyServices } from '../components/consultancy/ConsultancyServices';
import { ConsultancyProcess } from '../components/consultancy/ConsultancyProcess';
import { ConsultancyBenefits } from '../components/consultancy/ConsultancyBenefits';
import { ConsultancyContact } from '../components/consultancy/ConsultancyContact';

export function Consultancy() {
  return (
    <>
      <ConsultancyHero />
      <ConsultancyServices />
      <ConsultancyProcess />
      <ConsultancyBenefits />
      <ConsultancyContact />
    </>
  );
}