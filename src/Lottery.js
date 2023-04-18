import React, { useState } from 'react';

function Lottery({ names }) {
  const [winners, setWinners] = useState([]);

  function handleStart() {
    const numParticipants = names.reduce((total, name) => total + parseInt(name.chance.split(' ')[2], 10), 0);
    const participants = names.reduce((allParticipants, name) => {
      const numEntries = parseInt(name.chance.split(' ')[2], 10);
      const entries = Array.from({ length: numEntries }, () => name.name);
      return [...allParticipants, ...entries];
    }, []);
    if (numParticipants < 8) {
      alert('Not enough participants to select 8 winners');
      return;
    }
    if (numParticipants < winners.length) {
      alert('There are not enough participants left to select more winners');
      return;
    }
    const selectedWinners = [];
    for (let i = 0; i < 8; i++) {
      const eligibleParticipants = participants.filter((participant) => !selectedWinners.includes(participant));
      const index = Math.floor(Math.random() * eligibleParticipants.length);
      const winner = eligibleParticipants[index];
      selectedWinners.push(winner);
    }
    setWinners(selectedWinners);
  }

  return (
    <div className='lottery-winners'>
      <button onClick={handleStart}>Start Lottery</button>
      <div >
        {winners.length > 0 ? (
          <p className='lottery-winner'>
            Winner{winners.length > 1 ? 's' : ''}: {winners.join(', ')}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default Lottery;
