
import './modal.css';
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";


const OrderDetails = () => {

   
    return (
        <>
        
            <section className="section">
                <p className="text text_type_digits-large">034536</p>
                <p className="text text_type_main-default">
                    Идентификатор заказа
                </p>

                <div className="vectorSecond">
                    <div className="vectorFirst">
                        <CheckMarkIcon type="primary" />
                    </div>
                </div>

                <p className="text text_type_main-default">
                    Ваш заказ начали готовить
                </p>
                <p className="text text_type_main-default text_color_inactive">
                    Дождитесь готовности на орбитальной станции
                </p>
            </section>
            
        </>

    )


}

export default OrderDetails