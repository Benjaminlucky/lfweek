import { categoryData } from './categoryData'
import './categories.css'

const Categories = () => {
    return (
        <div className="container-category category__wrapper">
            {
                categoryData.map(({id, image, tag, title,}, ) => {
                    return (
                        <div key={id} className="categories">
                            <img src={image} alt="" className="category__image" />
                            <div className="content__wrapper">
                                <div className="category__content">
                                    <span className="category__subtitle">{tag}</span>
                                    <h4 className="category__title">{title}</h4>
                                </div>
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default Categories