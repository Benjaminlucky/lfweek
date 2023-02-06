import Logo from '../../images/lsfweekLogoPurple.png'
import {ImFacebook} from 'react-icons/im'
import {ImTwitter} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'


export const footerAbout = [
    {
        id: 1,
        logo: Logo,
        details: "The main object of the LFW is to promote fashion designs from Lagos, Nigeria and Africa to International buyers and media representatives, meanwhile, to connect the designers to main buyers and investor.",
    }
]

export const QuickLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About us",
        path: "/about"
    },
    {
        name: "Contact us",
        path: "/contact"
    },
]

export const socialHandles = [
    {
        icon: <ImFacebook/>,
        path: "https://www.facebook.com/",
    },
    {
        icon: <ImTwitter/>,
        path: "https://twitter.com/",
    },
    {
        icon: <BsInstagram/>,
        path: "https://www.instagram.com/",
    }
]

export const contactDetails = [
    {
        id: 1,
        address: "Suite D244, road one, Ikota Complex, near VGC,  Lekki, Lagos Nigeria.",
        tel1: "09060005567, 08093932288",
        tel2: "08093932288"
    }
]