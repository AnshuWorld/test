"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination";
export default function Carousel(){
    return(
        <Swiper loop navigation modules={[Navigation, Pagination]}>
            <SwiperSlide>
                <img src="/a.jpg" className="w-full h-screen object-cover opacity-60"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/a.jpg" className="w-full h-screen object-cover opacity-60"/>
            </SwiperSlide>
        </Swiper>
    );
}
