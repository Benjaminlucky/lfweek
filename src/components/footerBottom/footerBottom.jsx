import './footerBottom.css'


const FooterBottom = () => {
    return (
        <div className='container-fb '>
            <div className="bottom__wrapper">
                <p className='copyright'>All Rights Reserved &#169; {(new Date().getFullYear())} Lekki Fashion Week</p>
            </div>
        </div>
    )
}

export default FooterBottom