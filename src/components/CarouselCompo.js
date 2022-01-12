
import Carousel from 'react-elastic-carousel'
import CarouselItem from "./CarouselItem";
import './carousel.css'
import img1 from './des.png';
const CarouselCompo = () => {

    return (
        <div className="carousel-Component">
            <Carousel>
                <CarouselItem><img className='w-68 h-68' src={img1} alt="" /></CarouselItem>
                <CarouselItem><img src={img1} alt="" /></CarouselItem>
                <CarouselItem><img src={img1} alt="" /></CarouselItem>
                <CarouselItem><img src={img1} alt="" /></CarouselItem>
                <CarouselItem><img src={img1} alt="" /></CarouselItem>
                <CarouselItem><img src={img1} alt="" /></CarouselItem>
                <CarouselItem><img src={img1} alt="" /></CarouselItem>
                <CarouselItem><img src={img1} alt="" /></CarouselItem>

            </Carousel>
        </div>
    );
}

export default CarouselCompo;