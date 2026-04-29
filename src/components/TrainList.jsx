import React, { useState } from 'react';
import { trains } from '../data/trains';
import TrainCard from './TrainCard';

const TrainList = () => {
  const [search, setSearch] = useState('');
  const filtered = trains.filter(t => 
    t.from.toLowerCase().includes(search.toLowerCase()) || 
    t.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Куди їдемо?" 
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      {filtered.map(t => <TrainCard key={t.id} train={t} />)}
    </div>
  );
};

export default TrainList;