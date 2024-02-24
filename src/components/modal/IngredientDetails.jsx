import { arr } from '../../utils/data';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import useBurger from '../../libs/hoocks';


const IngredientDetails = () => {
    const data = useBurger()
    data.data.map(item => {
        return (
            <>
                <section>
                    <div className="details_inner">
                        <div className="details_title">
                            <p className="text text_type_main-medium">
                                Детали ингридиента
                            </p>
                            <CloseIcon type="primary" />
                        </div>
                        <img src={item.image} alt="" />
                        <div className="details_name">
                            {item.name}
                        </div>
                        <div className="details_compound">

                            <div className="details_item">
                                <div className="details_weight">
                                    Калории,ккал
                                </div>
                                <div className="details_num">
                                    {item.calories}
                                </div>
                            </div>

                            <div className="details_item">
                                <div className="details_weight">
                                    Белки, г
                                </div>
                                <div className="details_num">
                                    {item.carbohydrates}
                                </div>
                            </div>

                            <div className="details_item">
                                <div className="details_weight">
                                    Жиры, г
                                </div>
                                <div className="details_num">
                                    {item.fat}
                                </div>
                            </div>

                            <div className="details_item">
                                <div className="details_weight">
                                    Углеводы, г
                                </div>
                                <div className="details_num">
                                    {item.proteins}
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </>
        )
    })

}

export default IngredientDetails