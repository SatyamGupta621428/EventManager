import React, { useState } from 'react';
import './EventForm.css';

function EventForm({ addEvent }) {
  const [eventData, setEventData] = useState({
    eventName: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(eventData);
    setEventData({ eventName: '', startDate: '', endDate: '', location: '' });
  };

  return (
    <div>
      <h1 className="title">Create Event Page</h1> {/* Title for the page */}
      <form className="event-form" onSubmit={handleSubmit}>
        <label>Event Name:</label>
        <input
          type="text"
          name="eventName"
          value={eventData.eventName}
          onChange={handleChange}
          required
        />
        
        <label>Start Date:</label>
        <input
          type="datetime-local"
          name="startDate"
          value={eventData.startDate}
          onChange={handleChange}
          required
        />
        
        <label>End Date:</label>
        <input
          type="datetime-local"
          name="endDate"
          value={eventData.endDate}
          onChange={handleChange}
          required
        />
        
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleChange}
          required
        />
        
        <button type="submit" className="create-button">Create Event</button>
      </form>
    </div>
  );
}

export default EventForm;
