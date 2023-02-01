
import { highlight } from "./highlight"
import './highlights.css'





const Highlights = () => {
    return (
        <div className="container highlight__container">
            {
                highlight.map(({id, icon, title, desc}, ) =>  {
                    return (
                        <div className="highlight__content">
                            <div key={id} className="highlight">
                                <span className="highlight__icon">{icon}</span>
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