import TeamDashCon from "./TeamDashCon";

import { useQuery,gql } from "@apollo/client";

const TeamDashboard = (props) => {
    let list = [1, 2, 4, 5, 6, 7];

    const getAllProjects=gql`
        query{
  projects {
    title
    details {
      displayInfo
      photoURL
      interests
    }
    tickets {
      id      
    }
    availableTickets {
      id
    }
    id
  }
}
    `

    const {error,loading,data}=useQuery(getAllProjects);
    if(error)return <div className="team-dashBoard flex flex-col bg-slate-200">Internal server error</div>
    if(loading) return <div className="team-dashBoard flex flex-col bg-slate-200">Loading</div>
    const {projects}=data;
    
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
                projects.map(({title,details,tickets,availableTickets,id}) =>
                    <TeamDashCon key={id} title={title} details={details} statusNum={(tickets.length-availableTickets.length)/tickets.length || 0}/>)
            }
        </div>

    );
}

export default TeamDashboard;