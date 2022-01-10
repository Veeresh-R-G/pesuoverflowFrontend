import IndiDashCon from './IndiDashCon';

import {gql,useQuery} from '@apollo/client'
const Dashboard = (props) => {

    const getUserInfo=gql`
        query($uid:ID){
            user(id:$uid){
                name
                details{
                    photoURL
                    interests
                    contact{
                      email
                      phone
                    }
                }
                projects{
                    post
                    project{
                        title
                    }
                }
                clubs{
                    post
                    club{
                        name
                    }
                }
                recentTicket{
                  name
                  displayInfo
                  status{
                    statusNum
                    statusLine
                  }
                  header{
                    project{
                      title
                    }
                  }
                }
    						
            }

        }
    `

const { loading, error, data } = useQuery(getUserInfo, {
    variables: { uid:"61db4803e48a82c42a5d1254"},
  });

  if (loading) return "Loading...";
  if (error){console.log(error); return `Error! ${error}`};
    console.log(data);
    let {name,details,projects,clubs,recentTicket}=data.user;
    let {phone,email}=details.contact;
    return (

        <div className="indi-dash flex flex-col bg-slate-300 h-full">

            {
                /*
                    This is Main DashBaord Component of Each Individual Component
                    We can set through props
                */
            }
            <IndiDashCon name={name} photoURL={details.photoURL} phone={phone} email={email} projects={projects} clubs={clubs} interests={details.interests} ticket={recentTicket}/>
      

        </div>
    );
}

export default Dashboard;