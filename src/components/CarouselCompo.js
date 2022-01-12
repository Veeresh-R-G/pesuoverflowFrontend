import { useState } from "react";
import Carousel from 'react-elastic-carousel'
import CarouselItem from "./CarouselItem";
import './carousel.css'
const CarouselCompo = () => {
    //This is the Parameter that makes the Carousel Responsive
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];
    return (
        <div className="carousel-Component">
            <Carousel breakPoints={breakPoints}>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
                <CarouselItem></CarouselItem>
            </Carousel>
        </div>
    );
}

export default CarouselCompo;