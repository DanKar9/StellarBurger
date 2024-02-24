import styles from './burgerConstructor.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { arr } from '../../utils/data';
import { LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DeleteIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import useBurger from '../../libs/hoocks';
import { useState } from 'react';



const BurgerItem = (props) => {
    
    
    const icon = props.type === 'bun' ? <LockIcon type="primary" style={{ overflow: 'hidden' }} /> : <DeleteIcon type="primary" />


    return (
        <div className={styles.burgerItem}>
            <DragIcon type="primary" />
            <img className={styles.burgerImage} src={props.image} alt="" />
            <h3 className={styles.burgerName}>{props.name}</h3>
            <div className={styles.display}>
                <div className={styles.burgerPrice}>{props.price}</div>
                <CurrencyIcon type="primary" />
            </div>

            {icon}


        </div>
    )
}









const BurgerConstructor = ({setActive}) => {
    const data = useBurger()
    
    return (

        <main className={styles.mainConstructor
        
        }>
            <div className={styles.container}>
                <div className={styles.burgerInner}>
                    {



                        data.data.map(item => {

                            return <BurgerItem type={item.type} key={item.id} name={item.name} price={item.price} image={item.image}></BurgerItem>
                        })
                    }


                </div>

                <div className={styles.burgerAllPrice}>
                    <div className={styles.numIcon}>
                        <p className="text text_type_digits-medium">1234567890</p>
                        <CurrencyIcon type="primary" />
                    </div>

                    <Button onClick ={() => setActive(true)}  htmlType="button" type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </div>


        </main>
    )



}




BurgerItem.propTypes = {
    props: PropTypes.object
}

BurgerConstructor.propTypes = {
    setActive: PropTypes.func
}

export default BurgerConstructor