import React from 'react';
import { Link } from 'react-router-dom';

const TrainCard = ({ train }) => {
  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      border: '1px solid #e1bee7',
      padding: '25px', 
      borderRadius: '20px', 
      marginBottom: '20px',
      boxShadow: '0 4px 15px rgba(74, 20, 140, 0.05)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <span style={{ backgroundColor: '#7b1fa2', color: 'white', padding: '5px 12px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 'bold' }}>
          № {train.number}
        </span>
        <span style={{ color: '#9c27b0', fontSize: '0.9rem' }}>{train.duration}</span>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#4a148c' }}>{train.depTime}</div>
          <div style={{ color: '#7b1fa2' }}>{train.from}</div>
        </div>
        
        <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '100%', height: '2px', backgroundColor: '#e1bee7', position: 'relative' }}>
             <span style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', fontSize: '1.2rem' }}>🚂</span>
          </div>
          <div style={{ fontSize: '0.65rem', color: '#ba68c8', marginTop: '5px', letterSpacing: '1px' }}>ПРЯМИЙ РЕЙС</div>
        </div>

        <div style={{ flex: 1, textAlign: 'right' }}>
          <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#4a148c' }}>{train.arrTime}</div>
          <div style={{ color: '#7b1fa2' }}>{train.to}</div>
        </div>
      </div>

      <Link to={`/booking/${train.id}`} style={{ textDecoration: 'none' }}>
        <button style={{ 
          width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
          backgroundColor: '#7b1fa2', color: 'white', fontWeight: 'bold', cursor: 'pointer',
          fontSize: '1rem'
        }}>
          Вибрати місця
        </button>
      </Link>
    </div>
  );
};

export default TrainCard;