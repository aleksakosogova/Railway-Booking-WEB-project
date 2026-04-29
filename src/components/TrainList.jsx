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
        placeholder="Пошук за містом або номером..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ccc' }}
      />
      {filteredTrains.map(train => <TrainCard key={train.id} train={train} />)}
    </div>
  );
};

export default TrainList;