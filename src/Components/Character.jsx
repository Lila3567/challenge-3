import React, { useState } from 'react';

function Character({ value, characters, setCharacters, image, name, description, index }) {
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState(name || '');
  const [editDescription, setEditDescription] = useState(description || '');
  const [editImage, setEditImage] = useState(image || '');

  const deleteCharacter = () => {
    setCharacters(characters.filter((elt) => elt !== value));
  };

  const editMode = () => {
    setEditName(name || '');
    setEditDescription(description || '');
    setEditImage(image || '');
    setEdit(true);
  };

  const handleEdit = (event) => {
    if (event.key === 'Enter' && editName.trim() && editDescription.trim() && editImage.trim()) {
      const updatedCharacters = [...characters];
      updatedCharacters[index] = { ...value, name: editName, description: editDescription, image: editImage };
      setCharacters(updatedCharacters);
      setEditName('');
      setEditDescription('');
      setEditImage('');
      setEdit(false);
    }
  };

  return (
    <div className="character">
      {edit ? (
        <div className="edit-form">
          <input
            type="text"
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
            onKeyDown={handleEdit}
            placeholder="Image URL"
            className="input-edit"
            autoFocus
          />
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onKeyDown={handleEdit}
            placeholder="Name"
            className="input-edit"
          />
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            onKeyDown={handleEdit}
            placeholder="Description"
            className="input-edit"
          />
        </div>
      ) : (
        <>
          <img src={image} alt={name || 'Character image'} className="image" />
          <h2>Name: {name}</h2>
          <h4>Description: {description}</h4>
          <div className='btn'>
            <button className="del" onClick={deleteCharacter}>
            Delete
          </button>
          <button className="edit" onClick={editMode}>
            Edit
          </button>
        
          </div>
         </> 
      )}
    </div>
  );
}

export default Character;