
import { Slide , Fade  } from 'react-slideshow-image';
import Item from '../../component/item/Item';
import  milk    from '../../assets/logo/MPPJ3.jpg'
import  pocari  from '../../assets/logo/1-1682752802fE5fs.jpg'
import  cocacola  from '../../assets/logo/silver-1677564900nbDQw.jpg'
import  sting  from '../../assets/logo/space-gray-1677564901OJQu7.jpg'
import images1 from '../../assets/logo/store-card-50-homekit-202301.jpg'
import images2 from '../../assets/logo/store-card-50-subscriptions-202108_GEO_US.jpg'
import images3 from '../../assets/logo/store-card-40-applecare-202301.jpg'
import services from '../../assets/logo/store-card-50-tv-services-202303.jpg'
import applecare from '../../assets/logo/jCFZFUaNdokBGiRAfUZ7S.jpg'
import tvOS from '../../assets/logo/tvOS-16-1.jpg'
import apple from '../../assets/logo/new-apple-tv-4k-a15-bionic-chip-hdr10-and-up-to-128-gb-of-storage.jpg'
import majic from '../../assets/logo/1-1670813352e6Xk5.jpg'
import studio from '../../assets/logo/1new-1671172796BMapY.jpg'
import display from '../../assets/logo/mac-display-nano-glass-and-tilt-and-height-adjustable-removebg-preview-1656386892lm9wJ.png'
import macbook from '../../assets/logo/macbook-pro-13-m2-space-gray-removebg-preview-1657078925mfa4Z.png'
import macbookair from '../../assets/logo/macbook-air-m2-2022-midnight-1657797234aKhcw.jpg'


const AboutPage = () =>
{
    const images = [
        images1,
        images2,
        images3,
    ];

    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ];

    const Data = [
        {
            name : "milk",
            image : studio ,
            price : 4008,
            discount : 0.5
        },
        {
            name : "pocari",
            image : pocari,
            price : 2300,
            discount : 0.5
        },
        {
            name : "cocacola",
            image : cocacola,
            price : 3001,
            discount : 0.5
        },
        {
            name : "sting",
            image : sting,
            price : 2100,
            discount : 0.5
        },
        {
            name : "sting",
            image : majic,
            price : 1000,
            discount : 0.5
        },
        {
            name : "sting",
            image : macbookair,
            price : 2200,
            discount : 0.5
        },
        {
            name : "sting",
            image : macbook,
            price : 1020,
            discount : 0.5
        },
        {
            name : "sting",
            image : display,
            price : 2000,
            discount : 0.5
        },
    ]

    const FadeImage = [
        services,
        tvOS,
        applecare,
        apple,
    ];

    return(
        <>
         <Fade>
                <div className="each-slide">
                <div>
                    <img src={FadeImage[0]} alt="" />
                </div>
                <div>
                    <img src={FadeImage[1]} alt="" />
                </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={FadeImage[1]} alt="" />
                    </div>
                    <div>
                        <img src={FadeImage[3]} alt="" />
                    </div>
                </div>
                <div className="each-slide">
                <div>
                    <img src={FadeImage[2]} alt="" />
                </div>
                <div>
                    <img src={FadeImage[1]} alt="" />
                </div>
                </div>
         </Fade>
       <div style={{ width: "100%" }}>
            <Slide  om slidesToScroll={3} slidesToShow={3} indicators={true} responsive={responsiveSettings}>
                    <div className="each-slide">
                        <img src={images[0]} alt='' />
                    </div>
                    <div className="each-slide">
                        <img src={images[1]}  alt='' />
                    </div>
                    <div className="each-slide">
                        <img src={images[2]}  alt='' />
                    </div>
            </Slide>
        </div>
        <h5>Accessories. Essentials that pair perfectly with your favorite devices.</h5>
        <div>
             {
                Data.map((item , index )=> {
                    return(
                       <div key={index}>
                            <Item 
                                code = {item.code} 
                                name = {item.name} 
                                image = {item.image}
                                price = {item.price} 
                                discount = {item.discount}  />
                       </div>
                    )
                })
             }
        </div>
        </>
    )
}

export default AboutPage
