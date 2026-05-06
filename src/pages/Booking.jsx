import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { trains } from '../data/trains';
import { BookingService } from '../services/BookingService.js';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';
import styles from '../styles/Booking.module.css';

const Booking = () => {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const train = trains.find(t => t.id === parseInt(trainId));

  const [wagon, setWagon] = useState(1); // Вибір вагона
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    // Ключ тепер включає номер вагона
    setBookedSeats(BookingService.getBookedSeats(`${trainId}_vagon_${wagon}`));
  }, [trainId, wagon]);

  const handleSeatClick = (num) => {
    setSelectedSeats(prev => 
      prev.includes(num) ? prev.filter(s => s !== num) : [...prev, num]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    BookingService.saveBooking(`${trainId}_vagon_${wagon}`, { ...formData, seats: selectedSeats });
    toast.success(`Заброньовано місця: ${selectedSeats.join(', ')} у вагоні №${wagon}`);
    
    setBookedSeats([...bookedSeats, ...selectedSeats]);
    setSelectedSeats([]);
    setFormData({ name: '', phone: '', email: '' });
  };

  if (!train) return <div className={styles.container}><h2>Потяг не знайдено</h2></div>;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button className={styles.backBtn} onClick={() => navigate('/')}>← До списку</button>
        
        <h2 style={{ color: '#4a148c' }}>Бронювання: {train.from} — {train.to}</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#4a148c', fontWeight: 'bold', marginRight: '10px' }}>Виберіть вагон:</label>
          <select 
            value={wagon} 
            onChange={(e) => { setWagon(e.target.value); setSelectedSeats([]); }}
            className={styles.inputField}
            style={{ width: 'auto', display: 'inline-block' }}
          >
            {[1, 2, 3, 4, 5].map(v => <option key={v} value={v}>Вагон №{v}</option>)}
          </select>
        </div>

        <SeatMap 
          seatsCount={20} 
          bookedSeats={bookedSeats} 
          selectedSeats={selectedSeats} 
          onSeatClick={handleSeatClick} 
        />

        <BookingForm 
          formData={formData} 
          setFormData={setFormData} 
          onSubmit={handleSubmit} 
          selectedSeats={selectedSeats}
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Booking;