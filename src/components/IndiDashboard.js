import Navbar from './Navbar';
import IndiDashCon from './IndiDashCon';

const Dashboard = (props) => {

    return (

        <div className="indi-dash flex flex-col bg-slate-300 h-screen">
            {
                /*
                    This is Navbar component
                */
            }
            <Navbar />


            {
                /*
                    This is Main DashBaord Component of Each Individual Component
                */
            }
            <IndiDashCon />

        </div>
    );
}

export default Dashboard;