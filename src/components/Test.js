import { Carousel } from "react-responsive-carousel";
import img1 from './des.png';
const Test = (props) => {
    return (
        <Carousel className="w-96">
            <div>
                <img src={img1} className="w-10 h-10" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={img1} className="w-10 h-10" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={img1} className="w-10 h-10" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>

    );
}

export default Test;