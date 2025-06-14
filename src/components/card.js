// component/Card.js
import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default Card;
