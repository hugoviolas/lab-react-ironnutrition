import React from 'react';
import './FoodBox.css';
import { Card, Col, Button } from 'antd';

const FoodBox = ({ food, deleteFood }) => {
  return (
    <div>
      <Col>
        <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
          <img src={food.image} height={60} alt="food" />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>
          <Button
            type="primary"
            onClick={() => {
              deleteFood(food.name);
            }}
          >
            {' '}
            Delete{' '}
          </Button>
        </Card>
      </Col>
    </div>
  );
};

export default FoodBox;
