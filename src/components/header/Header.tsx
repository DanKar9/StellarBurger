import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './header.module.css';

import { useState } from 'react'



const Header = () => {
  
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <div className="left">
                        <Button  htmlType="button" type="primary" size="medium" extraClass="ml-2">
                            <span className={styles.display}>
                                <BurgerIcon type="primary" />
                                <p className="text text_type_main-default">
                                    Конструктор
                                </p>
                            </span>

                        </Button>
                        <Button className={styles.Btn} htmlType="button" type="secondary" size="medium" extraClass="ml-2">
                            <span className={styles.display}>
                                <ListIcon type="primary" />
                                <p className="text text_type_main-default text_color_inactive" style={{marginLeft: '9px'}}>
                                    Лента заказов
                                </p>
                            </span>

                        </Button>
                    </div>


                    <div className="center">
                        <Logo />
                    </div>
                    <div className="right">
                        <Button className={styles.Btn} htmlType="button" type="primary" size="medium" extraClass="ml-2">
                            <span className={styles.display}>
                                <ProfileIcon type="primary" />
                                <p className="text text_type_main-default text_color_inactive" style={{marginLeft: '9px'}}>
                                    Личный кабинет
                                </p>
                            </span>

                        </Button>
                    </div>

                </nav>
            </div>

        </header>
    )
}


export default Header