import React, { useState } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div>
      <EventForm addEvent={addEvent} />
      <EventList events={events} />
    </div>
  );
}

export default App;
