import IndiDashCon from './IndiDashCon';

const Dashboard = (props) => {

    return (

        <div className="indi-dash flex flex-col bg-slate-300 h-screen">

            {
                /*
                    This is Main DashBaord Component of Each Individual Component
                    We can set through props
                */
            }
            <IndiDashCon />

        </div>
    );
}

export default Dashboard;