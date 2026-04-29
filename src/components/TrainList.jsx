import React, { useState } from 'react';
import { trains } from '../data/trains';
import TrainCard from './TrainCard';

const TrainList = () => {
  const [query, setQuery] = useState('');

  const filteredTrains = trains.filter(t => 
    t.from.toLowerCase().includes(query.toLowerCase()) || 
    t.to.toLowerCase().includes(query.toLowerCase()) ||
    t.number.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Куди прямуємо? (місто або номер)" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ 
          width: '100%', 
          padding: '15px 20px', 
          marginBottom: '30px', 
          borderRadius: '15px', 
          border: '2px solid #e1bee7',
          backgroundColor: '#ffffff',
          color: '#4a148c',
          fontSize: '1rem',
          outline: 'none',
          boxSizing: 'border-box'
        }}
      />
      {filteredTrains.map(train => <TrainCard key={train.id} train={train} />)}
    </div>
  );
};

export default TrainList;