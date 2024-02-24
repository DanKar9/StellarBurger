



import { useState } from 'react';
import './App.css';
import BurgerConstructor from './components/burgerConstructor/BurgerConstructor';
import BurgerIngridients from './components/burgerIngridients/BurgerIngridients';
import Header from './components/header/Header';
import Modal from './components/modal/modal'
import useBurger from './libs/hoocks';
import OrderDetails from './components/modal/OrderDetails';
import IngredientDetails from './components/modal/IngredientDetails';







  

function App()  {
  useBurger()
  const [modalActive,setModalActive] = useState(false)
  return (
    <>
    <div className="App">
    <Modal  active={modalActive} setActive={setModalActive}>
    <OrderDetails></OrderDetails>
    </Modal>
    
   
    
     <Header></Header>
    <main  className='main'>
   
      <div className='main__left'>
       
      <BurgerIngridients active={modalActive} setActive={setModalActive}></BurgerIngridients>
      </div>
      
      <div className='main__right'>
      <BurgerConstructor active={modalActive} setActive={setModalActive}></BurgerConstructor>
      </div>
     
    </main>
    
  
      
    </div>

    
    </>
  );
}

export default App ;


