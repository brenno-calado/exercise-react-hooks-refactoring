import React, { useState } from 'react';
import CarsContext from './CarsContext';

const Provider = ({ children }) => {

  const defaultCars = {
    red: false,
    blue: false,
    yellow: false,
  }
  const [cars, setCar] = useState(defaultCars);

  const moveCar = (car, side) => {
    setCar((lastState) => ({ ...lastState, [car]: side}) )
  };
  const context = {
    cars,
    moveCar,
  };

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
};

export default Provider;
