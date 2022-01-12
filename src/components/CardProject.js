import { Card } from "react-bootstrap";
import img1 from './des.png';
const CardProject = () => {
    let NAME = "SpiderMan"
    return (

        <div className="mr-2 mb-3 transition hover:translate-y-2 ">
            <a href='/card' className="">
                <Card className="border border-violet-600 w-myWidth5 h-48 rounded-xl bg-white hover:bg-slate-100">
                    <div className="border-b-2 border-violet-600 drop-shadow-xl mt-2 mx-10">
                        <Card.Img variant="top" src={img1} className="ml-16 rounded-xxl border-4 border-white h-20 w-20 " />
                    </div>

                    <Card.Body className="p-3 flex justify-center items-center flex-col">
                        <Card.Title className="text-lg font-bold">{NAME}</Card.Title>
                        <Card.Text>
                            <h1 className='mt-2'>POST HERE</h1>
                        </Card.Text>
                        {
                            /*
                                    Have kept button to redirect to the Individual profile
                            */
                        }
                        {/* <Button variant="primary" className="bg-blue-300 rounded-md mx-5 mt-3 p-1 uppercase">This is button</Button> */}
                    </Card.Body>
                </Card>
            </a>
        </div >


    );
}

export default CardProject;