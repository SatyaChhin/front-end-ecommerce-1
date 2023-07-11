/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect, useState } from 'react';
import SkeletonPage from '../../component/skeleton/SkeletonPage';
import {  Slide , Fade  } from 'react-slideshow-image';
import axios from 'axios';
import 'react-slideshow-image/dist/styles.css'
import 'react-loading-skeleton/dist/skeleton.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinearIndeterminate from '../../component/linear/LinearIndeterminate.js'
import images1 from '../../assets/logo/store-card-50-homekit-202301.jpg'
import images2 from '../../assets/logo/store-card-50-subscriptions-202108_GEO_US.jpg'
import images3 from '../../assets/logo/store-card-40-applecare-202301.jpg'
import iphone14 from '../../assets/logo/homepod-mini-select-yellow-202110.jpg'
import iphone14pro from '../../assets/logo/homepod-select-midnight-202210.jpg'
import Item from '../../component/item/Item'
import Edition from '../../assets/logo/MQD83.jpg'
import airpods from '../../assets/logo/airpods-max-select-silver-202011.jpg'
import Beats  from '../../assets/logo/MQLJ3.jpg'
import watch  from '../../assets/logo/watch-card-40-ultra-202209.png'
import watchcard  from '../../assets/logo/watch-card-40-s8-202303.jpg'
import ipad  from '../../assets/logo/ipad-card-40-pro-202210.jpg'
import services from '../../assets/logo/store-card-50-tv-services-202303.jpg'
import applecare from '../../assets/logo/jCFZFUaNdokBGiRAfUZ7S.jpg'
import tvOS from '../../assets/logo/tvOS-16-1.jpg'
import apple from '../../assets/logo/new-apple-tv-4k-a15-bionic-chip-hdr10-and-up-to-128-gb-of-storage.jpg'


export default function HomePage(){
    const [ loading , setLoading ] = useState(false)
   
    const posts = [
        {
            title : "iPhone 14 Silicone Case with MagSafe Canary Yellow",
            status : "new",
            price : 290.0,
            image :iphone14,
        },
        {
            title : "iPhone 14 Pro Leather Case with MagSafe - Ink",
            status : "new",
            price : 290.0,
            image :iphone14pro
        },
        {
            title : "45mm Pride Edition Sport Band - M/L",
            status : "new",
            price : 220.0,
            image :Edition
        },
        {
            title : "HomePod mini Yellow  Leather Case with",
            status : "new",
            price : 690.0,
            image :airpods
        },
        {
            title : "AirPods Max  Leather Case with Silver  Leather Case with",
            status : "new",
            price : 590.0,
            image : Beats
        },
        {
            title : "HomePod  Leather Case with Midnight  Leather Case with",
            status : "new",
            price : 490.0,
            image :watch
        },
        {
            title : "AirPods (3rd generation) with Lightning Charging Case",
            status : "new",
            price : 500.0,
            image :ipad
        },
        {
            title : "AirPods (3rd generation) with Lightning Charging Case",
            status : "new",
            price : 790.0,
            image :watchcard
        }
    ]

    const FadeImage = [
        services,
        tvOS,
        applecare,
        apple,
    ];

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
                <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
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
            {loading ? <LinearIndeterminate/> : ""}
                <h5>Accessories. Essentials that pair perfectly with your favorite devices.</h5>
            { 
                loading ? <div className='loading'><SkeletonPage/></div> : 
                <>
                        {
                            posts.map((item , index )=> {
                                return(
                                <div key={index}>
                                    <Item 
                                        title = {item.title} 
                                        image = {item.image}
                                        price = {item.price} 
                                        discount = {item.discount}  />
                                </div>
                                )
                            })
                        }
                </>
            }
        </>
    )
}

