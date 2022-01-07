import TeamDashCon from "./TeamDashCon";

const TeamDashboard = (props) => {
    let list = [1, 2, 4, 5, 6, 7];
    return (
        <div className="team-dashBoard flex flex-col bg-slate-200">

            {
                /*
                    1. This is Main DashBaord Component of Each Individual Component
                    Here I have Made that too as an independent component
                    Since you can render multiple <TeamDashCon /> by passing in appropriate props
                    using map function

                    2. Below using map , I have rendered mulitple component just for testing purposes
                */
            }
            {
                list.map((item) =>
                    <TeamDashCon key={item} />)
            }
        </div>

    );
}

export default TeamDashboard;