import React from 'react';

const TrainCard = ({ train }) => (
  <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
    <h3>Потяг №{train.number}</h3>
    <p>Маршрут: {train.from} — {train.to}</p>
    <button style={{ padding: '8px 12px', cursor: 'pointer' }}>Вибрати квитки</button>
  </div>
);

export default TrainCard;