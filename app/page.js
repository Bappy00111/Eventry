import EventList from '@/components/landing/EventList';
import Header from '@/components/landing/Header';
import React from 'react';

export default function Home() {
  return (
    <section className="container">
      <Header />
      <EventList />
    </section>
  );
}
