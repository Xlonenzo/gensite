import React from 'react';
import { EducationHero } from '../components/education/EducationHero';
import { EducationPrograms } from '../components/education/EducationPrograms';
import { EducationMethodology } from '../components/education/EducationMethodology';
import { EducationInfo } from '../components/education/EducationInfo';

export function Education() {
  return (
    <>
      <EducationHero />
      <EducationPrograms />
      <EducationMethodology />
      <EducationInfo />
    </>
  );
}