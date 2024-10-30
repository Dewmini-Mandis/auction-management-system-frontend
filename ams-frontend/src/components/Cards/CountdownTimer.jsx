import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ endTime }) => {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = new Date(endTime) - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeRemaining(
          `${days > 0 ? `${days.toString().padStart(2, '0')}:` : ''}${hours > 0 ? `${hours.toString().padStart(2, '0')}:` : ''}${minutes > 0 ? `${minutes.toString().padStart(2, '0')}:` : ''}${seconds.toString().padStart(2, '0')}`
        );
       
        
      } else {
        setTimeRemaining('00:00:00');
      }
    };

    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, [endTime]);

  return (
    <div className='flex items-center'>
      <p className='text-red-600 font-medium text-lg'>{timeRemaining}</p>
      <span className='text-gray-500 text-[15px]'>&nbsp;remaining</span>
    </div>
  );
};

export default CountdownTimer;
