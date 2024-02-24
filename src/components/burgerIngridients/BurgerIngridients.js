import styles from './burgerIngridient.module.css';
import React from 'react';
import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { arr } from '../../utils/data';
import PropTypes from 'prop-types';
import useBurger from '../../libs/hoocks';





const BurgerIngridients = ({setActive}) => {
    const data = useBurger()
  
  
    const [current, setCurrent] = React.useState('one')
    return (

        <>

            <section className={styles.section}>
                <div className={styles.leftSection}>
                    <div className={styles.container}>
                        <h1 className='text text_type_main-large'>Соберите бургер</h1>




                        <div className={styles.tab}>
                            <Tab className={styles.tabItem} value="one" active={current === 'one'} onClick={setCurrent}>
                                Булки
                            </Tab>
                            <Tab className={styles.tabItem} value="two" active={current === 'two'} onClick={setCurrent}>
                                Соусы
                            </Tab>
                            <Tab className={styles.tabItem} value="three" active={current === 'three'} onClick={setCurrent}>
                                Начинки
                            </Tab>
                        </div>


                        <h2 className="text text_type_main-medium">Булки</h2>
                        <div className={styles.ingridientInner}>
                            <div className={styles.bulkaInner}>
                                {   
                                    data.data
                                        .filter(elem => elem.type ==='bun' || elem.type === 'sause')
                                        .map(item => {
                                            return  <div className={styles.sauseInner}>

                                            <div className={styles.sauseItem} onClick={() => setActive(true)}>
                                                <img src={item.image}></img>
                                                <div className={styles.bulkaPrice}>
                                
                                                    <p className="text text_margin text_type_digits-default p-2">{item.price}</p>
                                                    <CurrencyIcon className={styles.icon} type="primary" />
                                                </div>
                                                <div className={styles.bulkaName}>{item.name}</div>
                                            </div>
                                
                                        </div>
                                        })
                                }
                            </div>
                            <h2 className="text text_type_main-medium">Соусы</h2>

                            <div className={styles.sauseInner}>
                                {
                                    data.data
                                        .filter(elem => elem.type === 'sauce')
                                        .map(item => {
                                            return   <div className={styles.sauseInner}>

                                            <div className={styles.sauseItem} onClick={() => setActive(true)}>
                                                <img src={item.image}></img>
                                                <div className={styles.bulkaPrice}>
                                
                                                    <p className="text text_margin text_type_digits-default p-2">{item.price}</p>
                                                    <CurrencyIcon className={styles.icon} type="primary" />
                                                </div>
                                                <div className={styles.bulkaName}>{item.name}</div>
                                            </div>
                                
                                        </div>
                                        })
                                }
                            </div>
                        </div>







                    </div>
                </div>




            </section>




        </>
    )

}



BurgerIngridients.propTypes = {
    setActive: PropTypes.func
}





export default BurgerIngridients