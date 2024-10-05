import React, { useState } from 'react';
import './EventList.css';

function EventList({ events }) {
  const [view, setView] = useState('upcoming');

  const currentDateTime = new Date();
  const upcomingEvents = events.filter((event) => new Date(event.startDate) > currentDateTime);
  const pastEvents = events.filter((event) => new Date(event.startDate) <= currentDateTime);

  const handleViewChange = (newView) => {
    setView(newView);
  };

  // Function to format the date as "Dec 13" and get the day of the week
  const formatDate = (date) => {
    const eventDate = new Date(date);
    const monthDay = eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const weekday = eventDate.toLocaleDateString('en-US', { weekday: 'long' });
    return { monthDay, weekday };
  };

  return (
    <div className="event-list-container">
      <h1 className="title">Listing Page</h1>
      <h2 className="events-header">Events</h2>
      <div className="view-toggle">
        <button className={view === 'upcoming' ? 'active' : ''} onClick={() => handleViewChange('upcoming')}>
          Upcoming
        </button>
        <button className={view === 'past' ? 'active' : ''} onClick={() => handleViewChange('past')}>
          Past
        </button>
      </div>
      
      <div className="event-list-box">
        {view === 'upcoming' && (
          <>
            {upcomingEvents.length === 0 ? (
              <p>No upcoming events.</p>
            ) : (
              upcomingEvents.map((event, index) => {
                const { monthDay, weekday } = formatDate(event.startDate);
                return (
                  <div key={index} className="event-item">
                    <div className="event-date">
                      <p className="event-month-day">{monthDay}</p>
                      <p className="event-weekday">{weekday}</p>
                    </div>
                    <div className="event-details">
                      <h3>{event.eventName}</h3>
                      <p>{new Date(event.startDate).toLocaleTimeString()}</p>
                      <p>{event.location}</p>
                      {/* Removed the Invited +136 line */}
                    </div>
                  </div>
                );
              })
            )}
          </>
        )}

        {view === 'past' && (
          <>
            {pastEvents.length === 0 ? (
              <p>No past events.</p>
            ) : (
              pastEvents.map((event, index) => {
                const { monthDay, weekday } = formatDate(event.startDate);
                return (
                  <div key={index} className="event-item">
                    <div className="event-date">
                      <p className="event-month-day">{monthDay}</p>
                      <p className="event-weekday">{weekday}</p>
                    </div>
                    <div className="event-details">
                      <h3>{event.eventName}</h3>
                      <p>{new Date(event.startDate).toLocaleTimeString()}</p>
                      <p>{event.location}</p>
                      {/* Removed the Invited +136 line */}
                    </div>
                  </div>
                );
              })
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default EventList;
