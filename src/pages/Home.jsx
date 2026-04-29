import React from 'react';
import TrainList from '../components/TrainList';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#fcfaff', minHeight: '100vh', padding: '40px 20px', fontFamily: '"Segoe UI", sans-serif' }}>
      <div style={{ maxWidth: '650px', margin: 'auto' }}>
        <h1 style={{ textAlign: 'center', color: '#4a148c', marginBottom: '10px' }}>Укрзалізниця</h1>
        <p style={{ textAlign: 'center', color: '#7b1fa2', marginBottom: '40px' }}>Оберіть ваш ідеальний маршрут</p>
        <TrainList />
      </div>
    </div>
  );
};

export default Home;