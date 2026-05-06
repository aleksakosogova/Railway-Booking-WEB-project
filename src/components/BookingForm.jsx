import React from 'react';
import styles from '../styles/Booking.module.css';

const BookingForm = ({ formData, setFormData, onSubmit, selectedSeats }) => {
  return (
    <form onSubmit={onSubmit} style={{ marginTop: '20px', borderTop: '2px solid #f3e5f5', paddingTop: '20px' }}>
      <input 
        className={styles.inputField}
        placeholder="Прізвище та ім'я"
        value={formData.name}
        onChange={e => setFormData({...formData, name: e.target.value})}
        required
      />
      <input 
        className={styles.inputField}
        type="tel"
        placeholder="Телефон (напр. 0951234567)"
        value={formData.phone}
        onChange={e => setFormData({...formData, phone: e.target.value})}
        required
      />
      <input 
        className={styles.inputField}
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={e => setFormData({...formData, email: e.target.value})}
        required
      />
      <button 
        className={styles.submitBtn} 
        type="submit" 
        disabled={selectedSeats.length === 0}
      >
        {selectedSeats.length > 0 
          ? `Забронювати місця: ${selectedSeats.join(', ')}` 
          : 'Оберіть місця на схемі'}
      </button>
    </form>
  );
};

export default BookingForm;