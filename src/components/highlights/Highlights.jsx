
import { highlight } from "./highlight"
import './highlights.css'





const Highlights = () => {
    return (
        <div className="container highlight__container">
            {
                highlight.map(({id, img, title, desc}, ) =>  {
                    return (
                        <div className="highlight__content">
                            <div key={id} className="highlight">
                                <img src={img} alt="hights" className="highlight__image" />
                                <h3 className="highlight__title">{title}</h3>
                                <p className="highlight__desc">{desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Highlights