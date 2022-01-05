import ProMeter from "./ProgresMeter";
import { BsGithub } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
const ProDashCon = () => {
    return (
        <div className="flex flex-row dash-main text-black w-full mt-4 mb-6">

            {
                /*
                    We are going to access all details through props
                */
            }
            <div className="indi-content pb-5 w-myWidth rounded-lg border-[6px] border-slate-400 bg-gray-100 ml-72 pl-7">
                <h1 className='text-4xl font-black uppercase mt-10 pb-2 animate-bounce'>
                    <span className="overline">Project</span>
                    <span className="underline"> MAMA</span>
                </h1>

                <div style={{ width: "560px", marginLeft: "13px" }} className="h-96 border-4 p-4 rounded-md">
                    <img src={"example.svg"} alt="Project_Picture" />
                </div>

                <a href="/" target={"_blank"} className="uppercase">
                    {/* The Domain can be decided manually or by props anything is fine */}
                    <h1 className="text-lg hover:text-violet-700 duration-300 ">
                        Domain : ML / AI
                    </h1>
                </a>


                <a href="/" target={"_blank"} className="uppercase text-lg">
                    <h1 className="text-lg font-semibold hover:text-violet-700 hover:underline hover:decoration-wavy">
                        <BsGithub className="inline mr-5" /> REPO LINK HERE(if any)
                    </h1>
                </a>

                <a href="/" target={"_blank"} className="uppercase text-lg">
                    <h1 className="font-semibold hover:text-violet-700 hover:underline hover:decoration-wavy">
                        <BsLink45Deg className="inline mr-5" /> LIVE WEBSITE(if any)
                    </h1>
                </a>

            </div>

            <div className="team-logo-here border-[6px] border-gray-400 bg-white rounded-lg ml-5">
                <h1 className="font-medium text-3xl m-10 animate-bounce">TEAM PROGRESS</h1>
                <ProMeter />
            </div>


        </div>
    );
}

export default ProDashCon;