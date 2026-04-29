import React from 'react';
import { Link } from 'react-router-dom';

const TrainCard = ({ train }) => {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #4b0082 0%, #6a0dad 100%)', 
      color: 'white',
      padding: '20px', 
      borderRadius: '15px', 
      marginBottom: '20px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
      border: '1px solid #9370db'
    }}>
      <h2 style={{ color: '#e6e6fa', marginTop: '0' }}>Потяг {train.number}</h2>
      <div style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        <p><strong>Маршрут:</strong> {train.from} — {train.to}</p>
        <p><strong>Відправлення:</strong> {train.departureDate} о {train.departureTime}</p>
        <p><strong>Тривалість:</strong> {train.duration}</p>
      </div>
      <Link to={`/booking/${train.id}`} style={{ textDecoration: 'none' }}>
        <button style={{ 
          backgroundColor: '#dda0dd', 
          color: '#4b0082', 
          border: 'none', 
          padding: '12px 25px', 
          borderRadius: '8px', 
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '100%',
          fontSize: '1rem',
          transition: 'background 0.3s'
        }}>
          Вибрати місця
        </button>
      </Link>
    </div>
  );
};

export default TrainCard;