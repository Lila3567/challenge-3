import React, { useState } from 'react';
import Add from './Add';
import Character from './Character';

function MyList({ characters, setCharacters }) {
  const [showForm, setShowForm] = useState(false);

  const addCharacter = (newCharacter) => {
    setCharacters([...characters, newCharacter]);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
  <>
         <button className="toggle-form-btn" onClick={toggleForm}>
        {showForm ? '−' : '+'}
      </button>
      {showForm && <Add add={addCharacter} />}
       <div className="list"> 
       {characters.map((char, index) => (
        <Character
          key={index}
          value={char}
          name={char.name}
          image={char.image}
          description={char.description}
          setCharacters={setCharacters}
          characters={characters}
          index={index}
        />
      ))}
     
    </div> </>
  );
}

export default MyList;