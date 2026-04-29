import React from 'react';
import { Link } from 'react-router-dom';

const TrainCard = ({ train }) => {
  return (
    <div style={{ 
      backgroundColor: '#f3e5f5', 
      border: '1px solid #ce93d8',
      padding: '25px', 
      borderRadius: '16px', 
      marginBottom: '20px',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      boxShadow: '0 4px 12px rgba(106, 13, 173, 0.1)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <span style={{ backgroundColor: '#6a1b9a', color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
          Потяг {train.number}
        </span>
        <span style={{ color: '#7b1fa2', fontWeight: '600' }}>{train.duration}</span>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center', marginBottom: '20px' }}>
        <div>
          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#4a148c' }}>{train.depTime}</div>
          <div style={{ color: '#6a1b9a' }}>{train.from}</div>
        </div>
        <div style={{ alignSelf: 'center', color: '#ba68c8' }}>————✈————</div>
        <div>
          <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#4a148c' }}>{train.arrTime}</div>
          <div style={{ color: '#6a1b9a' }}>{train.to}</div>
        </div>
      </div>

      <Link to={`/booking/${train.id}`} style={{ textDecoration: 'none' }}>
        <button style={{ 
          width: '100%', padding: '12px', borderRadius: '8px', border: 'none',
          backgroundColor: '#7b1fa2', color: 'white', fontWeight: 'bold', cursor: 'pointer',
          fontSize: '1rem', transition: '0.3s'
        }}>
          Вибрати місця
        </button>
      </Link>
    </div>
  );
};

export default TrainCard;