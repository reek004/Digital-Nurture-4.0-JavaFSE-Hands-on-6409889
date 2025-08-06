import React, { useState } from 'react';

function UserPage() {
  const [bookings, setBookings] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  const confirmBooking = (passengerDetails) => {
    const newBooking = {
      id: bookings.length + 1,
      passenger: passengerDetails,
      bookingDate: new Date().toLocaleDateString(),
      status: 'Confirmed'
    };
    setBookings([...bookings, newBooking]);
    setShowBookingForm(false);
    alert('Booking confirmed successfully!');
  };

  return (
    <div className="user-page">
      <h1>Welcome User!</h1>
      <p>You can now book your tickets.</p>
      
      {!showBookingForm ? (
        <>
          <button 
            className="book-button"
            onClick={handleBookNow}
          >
            Book Ticket
          </button>

          {bookings.length > 0 && (
            <div className="bookings-section">
              <h2>Your Bookings</h2>
              <div className="bookings-container">
                {bookings.map(booking => (
                  <div key={booking.id} className="booking-card">
                    <h4>Booking #{booking.id}</h4>
                    <p><strong>Passenger:</strong> {booking.passenger.name}</p>
                    <p><strong>Date:</strong> {booking.bookingDate}</p>
                    <p><strong>Status:</strong> <span className="status-confirmed">{booking.status}</span></p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <BookingForm 
          onConfirm={confirmBooking}
          onCancel={() => setShowBookingForm(false)}
        />
      )}
    </div>
  );
}

function BookingForm({ onConfirm, onCancel }) {
  const [passengerDetails, setPassengerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    age: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passengerDetails.name && passengerDetails.email && passengerDetails.phone) {
      onConfirm(passengerDetails);
    } else {
      alert('Please fill all required fields');
    }
  };

  const handleChange = (e) => {
    setPassengerDetails({
      ...passengerDetails,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="booking-form">
      <h2>Book Ticket</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={passengerDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={passengerDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={passengerDetails.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={passengerDetails.age}
            onChange={handleChange}
            min="1"
            max="120"
          />
        </div>
        
        <div className="form-buttons">
          <button type="submit" className="confirm-button">Confirm Booking</button>
          <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UserPage;
