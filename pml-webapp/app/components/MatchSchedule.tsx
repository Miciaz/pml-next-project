// app/components/MatchSchedule.tsx
import React from 'react';
import styles from './MatchSchedule.module.css';

const MatchSchedule = () => {
  // Esempio di dati, puoi sostituirli con i tuoi reali
  const matches = [
    { team1: 'Team A', team2: 'Team B', date: '2024-08-10' },
    { team1: 'Team C', team2: 'Team D', date: '2024-08-15' },
    { team1: 'Team E', team2: 'Team F', date: '2024-08-20' },
    { team1: 'Team A', team2: 'Team B', date: '2024-08-10' },
    { team1: 'Team C', team2: 'Team D', date: '2024-08-15' },
    { team1: 'Team E', team2: 'Team F', date: '2024-08-20' },
    { team1: 'Team A', team2: 'Team B', date: '2024-08-10' },
    { team1: 'Team C', team2: 'Team D', date: '2024-08-15' },
    { team1: 'Team E', team2: 'Team F', date: '2024-08-20' },
    { team1: 'Team A', team2: 'Team B', date: '2024-08-10' },
    { team1: 'Team C', team2: 'Team D', date: '2024-08-15' },
    { team1: 'Team E', team2: 'Team F', date: '2024-08-20' },
  ];

  return (
    <div className={styles.schedule}>
      <h2>Prossime Partite</h2>
      <ul>
        {matches.map((match, index) => (
          <li key={index}>
            {match.team1} vs {match.team2} - {match.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchSchedule;
