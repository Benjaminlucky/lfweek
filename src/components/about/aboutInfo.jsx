import { aboutinfo } from "./about"
import './aboutinfo.css'


const Aboutinfo = () => {
    return (
        <div className="aboutinfo__container">
            {
                aboutinfo.map(({id, substitle, title, desc, image}, ) => {
                    return (
                        <div key={id} className="about__wrapper">
                            <div className="about__left">
                                <span className="about__subtitle">{substitle}</span>
                                <h2 className="about__title">{title}</h2>
                                <p className="about__desc">{desc}</p>
                                <a className='btn-primary' href="/about">Continue Reading</a>
                            </div>
                            <div className="about__right">
                                <img src={image} alt="" className="about__image" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Aboutinfo