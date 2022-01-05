import Navbar from "./Navbar";
import ProDashCon from "./ProDashCon";
const Project = () => {
    let list = [1, 2, 4, 5, 6, 7];
    return (
        <div className="team-dashBoard flex flex-col bg-slate-300">

            {
                /*
                    Navbar component
                */
            }
            <Navbar />


            {
                /*
                    1. This is Main DashBaord Component of Each Individual Component

                    2. Have rendered multiple components .... ok you know the reason 😎😁
                */
            }

            {
                list.map((item) => <ProDashCon id={item} />)
            }
        </div>

    );
}

export default Project;