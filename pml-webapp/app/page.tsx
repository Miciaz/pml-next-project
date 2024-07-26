// app/page.tsx
import React from 'react';
import Carousel from './components/Carousel';
import MatchSchedule from './components/MatchSchedule';

export default function Home() {
  return (
    <main>
      <Carousel />
      <MatchSchedule />
    </main>
  );
}
