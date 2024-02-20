import React from 'react';



import './App.css';
import BurgerConstructor from './components/burgerConstructor/BurgerConstructor';
import BurgerIngridients from './components/burgerIngridients/BurgerIngridients';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
     <Header></Header>
    <main className='main'>
      <div className='main__left'>
      <BurgerIngridients></BurgerIngridients>
      </div>
      
      <div className='main__right'>
      <BurgerConstructor></BurgerConstructor>
      </div>
    </main>
    
   
      
    </div>
  );
}

export default App;
