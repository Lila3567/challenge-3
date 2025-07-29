import React, { useState } from 'react';

const Character = ({ id, name, description, image, updateCharacter, deleteCharacter }) => {
  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editDesc, setEditDesc] = useState(description);
  const [editImage, setEditImage] = useState(image);

  let editMode = () => {
    setEditName(name);
    setEditDesc(description);
    setEditImage(image);
    setEdit(true);
  };

  let updateName = (event) => {
    setEditName(event.target.value);
  };

  let updateDesc = (event) => {
    setEditDesc(event.target.value);
  };

  let updateImage = (event) => {
    setEditImage(event.target.value);
  };

  let handleSave = (event) => {
    if (event.key === "Enter") {
      const updatedChar = { id, name: editName, description: editDesc, image: editImage };
      updateCharacter(id, updatedChar);
      setEdit(false);
    }
  };

  return (
    <div className="character">
      {!edit ? (
        <>
          <img src={image} alt={name} className="portrait" onClick={() => setEdit(false)} />
          <div className="text-component">
            <h2>{name}</h2>
            <p>{description}</p>
            <button className="edit" onClick={() => editMode()}>Edit</button>
            <button className="del" onClick={() => deleteCharacter(id)}>Delete</button>
          </div>
        </>
      ) : (
        <div className="edit-mode">
          <input
            value={editName}
            onChange={updateName}
            placeholder="Enter name"
          />
          <input
            value={editDesc}
            onChange={updateDesc}
            placeholder="Enter description"
          />
          <input
            value={editImage}
            onChange={updateImage}
            placeholder="Enter image URL"
          />
          <button className="save" onClick={() => { updateCharacter(id, { id, name: editName, description: editDesc, image: editImage }); setEdit(false); }}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Character;