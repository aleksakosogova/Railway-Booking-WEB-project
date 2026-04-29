import React from 'react';
import TrainList from '../components/TrainList';

const Home = () => {
  return (
    <div style={{ 
      backgroundColor: '#2e004f', // Темно-фіолетовий колір для боків
      minHeight: '100vh', 
      display: 'flex',
      justifyContent: 'center',
      fontFamily: '"Segoe UI", sans-serif' 
    }}>
      <div style={{ 
        backgroundColor: '#fcfaff', // Світлий фон центральної частини
        width: '100%',
        maxWidth: '800px',
        padding: '40px 30px',
        boxShadow: '0 0 50px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ textAlign: 'center', color: '#4a148c', fontSize: '3rem', marginBottom: '10px', fontWeight: '800' }}>
          RailWay UA
        </h1>
        <p style={{ textAlign: 'center', color: '#7b1fa2', marginBottom: '40px', fontSize: '1.1rem' }}>
          Оберіть ваш ідеальний маршрут
        </p>
        <TrainList /> [cite: 60, 119]
      </div>
    </div>
  );
};

export default Home;