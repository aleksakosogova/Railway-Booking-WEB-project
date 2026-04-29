import React from 'react';
import TrainList from '../components/TrainList';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '700px', margin: 'auto' }}>
        <h1 style={{ textAlign: 'center', color: '#e6e6fa', fontSize: '3rem', marginBottom: '40px' }}>
          Розклад потягів
        </h1>
        <TrainList />
      </div>
    </div>
  );
};

export default Home;