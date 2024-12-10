import React from 'react';
import { DevelopmentHero } from '../components/development/DevelopmentHero';
import { DevelopmentPrograms } from '../components/development/DevelopmentPrograms';
import { DevelopmentSkills } from '../components/development/DevelopmentSkills';
import { DevelopmentMentoring } from '../components/development/DevelopmentMentoring';
import { DevelopmentContact } from '../components/development/DevelopmentContact';

export function Development() {
  return (
    <>
      <DevelopmentHero />
      <DevelopmentPrograms />
      <DevelopmentSkills />
      <DevelopmentMentoring />
      <DevelopmentContact />
    </>
  );
}