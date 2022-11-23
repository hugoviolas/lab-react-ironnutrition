import React from 'react';
import { Input } from 'antd';
import { useState } from 'react';

const AddFoodform = ({ setFood }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFood((currentState) => {
      const copy = [...currentState];
      copy.push({
        name,
        image,
        calories,
        servings,
      });
      return copy;
    });
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };
  const handleCaloriesChange = (event) => {
    if (event.target.value >= 0) {
      setCalories(event.target.value);
    }
  };
  const handleServingsChange = (event) => {
    if (event.target.value >= 0) {
      setServings(event.target.value);
    }
  };
  return (
    <div>
      <h2>Add Food Entry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <Input
            value={name}
            type="text"
            id="name"
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <Input
            value={image}
            type="text"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label htmlFor="name">Calories: </label>
          <Input
            value={calories}
            type="number"
            id="calories"
            onChange={handleCaloriesChange}
          />
        </div>
        <div>
          <label htmlFor="name">Servings: </label>
          <Input
            value={servings}
            type="number"
            id="servings"
            onChange={handleServingsChange}
          />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default AddFoodform;
