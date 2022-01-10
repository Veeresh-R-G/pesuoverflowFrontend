
import ProDashCon from "./ProDashCon";
import {gql,useQuery} from '@apollo/client'


const Project = () => {

    const getProjectInfo=gql`
        query($projectId: ID){
  project(id: $projectId){
    title
    details{
      displayInfo
      interests
      photoURL
      contact {
        email
      }
    }
    people {
      post
      user {
        name
        details{
            photoURL
        }
        id
      }
    }
    tickets{
        id
    }
    availableTickets{
        name
        requirements
        id
    }
  }
}
    `

const { loading, error, data } = useQuery(getProjectInfo, {
    variables: { projectId:"61db4e131aae142acebcd487"},
  });

  if (loading) return "Loading...";
  if (error){console.log(error); return `Error! ${error}`};
    console.log(data);
    let proj=data.project;
    let stats=(proj.tickets.length-proj.availableTickets.length)/proj.tickets.length;
    return (
        <div className="team-dashBoard flex flex-col bg-slate-300 h-full">
            {
                /*
                    1. This is Main DashBaord Component of Each Individual Component

                    2. Have rendered multiple components .... ok you know the reason 😎😁

                */
            }



            <ProDashCon project={proj} tickets={proj.availableTickets} statusNum={stats}/>
        

        </div>

    );
}

export default Project;