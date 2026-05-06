import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { trains } from '../data/trains';

const Booking = () => {
  const { trainId } = useParams();
  const navigate = useNavigate();
  
  // Знаходимо потяг за ID за допомогою .find()
  const train = trains.find(t => t.id === parseInt(trainId));

  // Стан для місць: 1-20 (імітуємо, що деякі вже зайняті)
  const [bookedSeats, setBookedSeats] = useState([3, 7, 12]); 
  const [selectedSeat, setSelectedSeat] = useState(null);

  if (!train) return <h2>Потяг не знайдено</h2>;

  const handleBooking = () => {
    if (selectedSeat) {
      alert(`Ви забронювали місце №${selectedSeat} на потяг ${train.number}`);
      setBookedSeats([...bookedSeats, selectedSeat]);
      setSelectedSeat(null);
    }
  };

  return (
    <div style={{ backgroundColor: '#2e004f', minHeight: '100vh', display: 'flex', justifyContent: 'center', padding: '40px 20px' }}>
      <div style={{ backgroundColor: '#fcfaff', width: '100%', maxWidth: '800px', padding: '40px', borderRadius: '20px' }}>
        <button onClick={() => navigate('/')} style={{ color: '#7b1fa2', cursor: 'pointer', border: 'none', background: 'none', marginBottom: '20px' }}>
          ← Назад до розкладу
        </button>
        
        <h1 style={{ color: '#4a148c' }}>Бронювання: {train.from} — {train.to}</h1>
        <p>Потяг №{train.number} | Час: {train.depTime}</p>

        <h3 style={{ marginTop: '30px' }}>Оберіть місце у вагоні:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', margin: '20px 0' }}>
          {[...Array(20)].map((_, i) => {
            const seatNum = i + 1;
            const isBooked = bookedSeats.includes(seatNum);
            const isSelected = selectedSeat === seatNum;

            return (
              <div 
                key={seatNum}
                onClick={() => !isBooked && setSelectedSeat(seatNum)}
                style={{
                  padding: '15px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  cursor: isBooked ? 'not-allowed' : 'pointer',
                  backgroundColor: isBooked ? '#e0e0e0' : isSelected ? '#9c27b0' : '#e1bee7',
                  color: isSelected ? 'white' : '#4a148c',
                  fontWeight: 'bold',
                  border: isSelected ? '2px solid #4a148c' : '1px solid #ce93d8'
                }}
              >
                {seatNum}
              </div>
            );
          })}
        </div>

        {selectedSeat && (
          <div style={{ marginTop: '30px', padding: '20px', border: '2px solid #9c27b0', borderRadius: '15px' }}>
            <p style={{ color: '#4a148c', fontWeight: 'bold' }}>Ви обрали місце №{selectedSeat}</p>
            <button 
              onClick={handleBooking}
              style={{ width: '100%', padding: '15px', backgroundColor: '#8e24aa', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '1rem' }}
            >
              Підтвердити бронювання
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;