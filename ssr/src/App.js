import React, { useState, useEffect } from 'react'


function App() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/groups')
      .then((response) => response.json())
      .then((data) => setGroups(data));
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      ce texte est rendu en ssr
      {groups.map(g =>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
          {g.map(student =>
            <span>{student}</span>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
