import React, { useState } from 'react';

export default function CompanionList({ matches }) {
  const [shortlisted, setShortlisted] = useState([]);

  const handleShortlist = name => {
    if (!shortlisted.includes(name)) setShortlisted([...shortlisted, name]);
  };

  return (
    <div className="min-w-80 bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className='font-bold text-2xl text-center mb-4'>Companions</h2>
      <ol className='list-decimal pl-6'>
        {matches.length === 0 ? <p className='mt-12 text-center'>No matches found</p> 
        : matches.map((match, i) => (
          <li key={i} className="mb-4 p-4 bg-gray-700 rounded-lg">
            <p><strong>{match.name}</strong> ({match.age} yrs)</p>
            <p>Interests: {match.interests.join(", ")}</p>
            <button className='bg-violet-400 hover:bg-violet-800 rounded mt-2 p-1 cursor-pointer' onClick={() => handleShortlist(match.name)}>
              {shortlisted.includes(match.name) ? "Shortlisted" : "Shortlist"}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
