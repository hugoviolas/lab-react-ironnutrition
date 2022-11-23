import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox/FoodBox';
import AddFoodForm from './AddFoodForm/AddFoodForm';
import Search from './Search/Search';
import { useState } from 'react';
import { Button } from 'antd';

function App() {
  const [food, setFood] = useState(foods);
  const [search, setSearch] = useState('');
  const [hideForm, setHideForm] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const displayFood = food.filter((aliment) => {
    return aliment.name.toLowerCase().includes(search.toLowerCase());
  });
  const deleteFood = (name) => {
    const remainingFood = food.filter((aliment) => {
      return aliment.name !== name;
    });
    if (remainingFood.length === 0) {
      setIsEmpty(true);
    }
    setFood(remainingFood);
  };
  return (
    <div className="App">
      {hideForm && <AddFoodForm setFood={setFood} />}
      <Button
        onClick={() => {
          setHideForm(!hideForm);
        }}
      >
        {hideForm && 'Hide Form'}
        {!hideForm && 'Add New Form'}
      </Button>
      <Search search={search} setSearch={setSearch} />
      {!isEmpty && (
        <div className="foodList">
          {displayFood.map((aliment) => {
            return (
              <FoodBox
                deleteFood={deleteFood}
                key={aliment.name}
                food={{
                  name: aliment.name,
                  calories: aliment.calories,
                  image: aliment.image,
                  servings: aliment.servings,
                }}
              />
            );
          })}
        </div>
      )}
      {isEmpty && 'Oops ! There is no more content to show.'}
    </div>
  );
}

export default App;
