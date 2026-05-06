import React from 'react';
import styles from '../styles/Booking.module.css';

const SeatMap = ({ seatsCount, bookedSeats, selectedSeats, onSeatClick }) => {
  return (
    <div className={styles.grid}>
      {[...Array(seatsCount)].map((_, i) => {
        const num = i + 1;
        const isOccupied = bookedSeats.includes(num);
        const isSelected = selectedSeats.includes(num);

        let seatClass = styles.seatFree;
        if (isOccupied) seatClass = styles.seatOccupied;
        else if (isSelected) seatClass = styles.seatSelected;

        return (
          <button 
            key={num} 
            className={`${styles.seat} ${seatClass}`}
            onClick={() => !isOccupied && onSeatClick(num)}
            disabled={isOccupied}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
};

export default SeatMap;