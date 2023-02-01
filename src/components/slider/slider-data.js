import video from '../../video/lfs-video.mp4'
import Image from '../../images/slide1.jpg'
import Image2 from '../../images/slide2.jpg'
import Image3 from '../../images/slide3.jpg'


export const slideData = [
    {
        id: 1,
        heading: 'Trends',
        image: <video loop autoPlay muted>
        <source src={require=({video})} type="video/mp4" />
 </video>,
        desc: 'Featuring the best in the fashion runway, many awards to be won'
    },
    {
        id: 2,
        heading: 'Glamour',
        image: Image2,
        desc: 'Featuring the best in the fashion runway, many awards to be won'
    },
    {   
        id: 3,
        heading: 'Beauty',
        image: Image3,
        desc: 'Featuring the best in the fashion runway, many awards to be won'
    },
    {
        heading: 'Pagentry',
        image: Image,
        desc: 'Featuring the best in the fashion runway, many awards to be won'
    },
]