import React from 'react';

const Card = () => {
  return (
    <div className="relative w-190 h-254 bg-lightgrey shadow-card z-10 rounded-21 overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-opacity-47 to-opacity-25 z-10 backdrop-blur-20 rounded-21"></div>
      <div className="absolute z-n1 border-radius-5em w-200 h-200 blob" style={{ left: '-50px', top: '-90px', background: '#ff930f' }}></div>
      <div className="absolute z-n1 border-radius-5em w-200 h-200 blob" style={{ left: '110px', top: '-20px', background: '#bf0fff' }}></div>
      <div className="absolute z-n1 border-radius-5em w-200 h-200 blob" style={{ left: '-40px', top: '100px', background: '#ff1b6b' }}></div>
      <div className="absolute z-n1 border-radius-5em w-200 h-200 blob" style={{ left: '100px', top: '180px', background: '#0061ff' }}></div>
    </div>
  );
};

export default Card;
