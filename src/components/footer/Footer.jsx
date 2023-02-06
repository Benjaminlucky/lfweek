import { Link, Router } from 'react-router-dom'
import {footerAbout} from './footerData'
import { QuickLinks } from './footerData'
import { socialHandles } from './footerData'
import { contactDetails } from './footerData'
import {ImLocation2} from 'react-icons/im'
import {MdPhoneCallback} from 'react-icons/md'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer__container footer__wrapper">
            <div className="footer-col-1">
                {
                    footerAbout.map(({id, logo, details}, ) => {
                        return (
                            <div key={id} className="footer-col-1__content">
                                <img src={logo} alt="" className="footer__logo" />
                                <p className="footer__details">{details}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer-col-2">
                <h3 className='quicklinks'>Quick Links</h3>
                {
                    QuickLinks.map(({name, path}, index) => {
                        return (
                            <div key={index} className="footer-col-2__content">
                                <Link to={path} className="links">{name}</Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer-col-3">
                <h3 className="socialmedia">Social Media Handles</h3>
                <div className="social__content">
                {
                    socialHandles.map(({icon, path}, index) => {
                        return (
                            <a href={path} target="_blank" className='social__links'>{icon}</a>
                        )
                    })
                }
                </div>

                <h3 className="socialmedia__contact">Contact Details</h3>
                
                    {
                        contactDetails.map(({id, address, tel1, tel2,}) => {
                            return(
                                <div key={id} className="contact__details">
                                    <div className="address"><span><ImLocation2/></span><p className='address__main'>{address}</p></div>
                                    <p className='tel'><span><MdPhoneCallback/></span>{tel1}</p>
                                </div>
                            )
                        })
                    }
            
            </div>
        </div>
    )
}

export default Footer 