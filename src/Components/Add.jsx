import React, { useState } from 'react';

function Add({ add }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'description') setDescription(value);
    if (name === 'image') setImage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && description && image) {
      add({ name, description, image });
      setName('');
      setDescription('');
      setImage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add">
      <input
        type="text"
        name="image"
        value={image}
        onChange={handleChange}
        placeholder="Add an image URL"
        autoComplete="off"
      />
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Add a name"
        autoComplete="off"
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Add a description"
        autoComplete="off"
      />
      <button type="submit" className="addbtn">
        Add
      </button>
    </form>
  );
}

export default Add;