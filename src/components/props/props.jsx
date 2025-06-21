import React from 'react';

const PerfumeCard = ({ imageSrc, title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <img src={imageSrc} alt={title} style={{ width: '150px', borderRadius: '10px' }} />
      <div>
        <h2>{title}</h2>
        <p><i>{subtitle}</i></p>
        <button onClick={onButtonClick} style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #ccc', background: 'transparent', cursor: 'pointer' }}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PerfumeCard;
