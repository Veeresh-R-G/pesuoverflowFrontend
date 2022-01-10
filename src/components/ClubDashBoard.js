import ClubDashCon from './ClubDashCon'

import {gql,useQuery} from '@apollo/client'
const ClubDashBoard = () => {

    const getClub=gql`
    query($clubId: ID){
  club(id: $clubId){
    name
    details {
      contact {
        email
      }
      photoURL
      displayInfo
      interests
    }
  
    people {
      post
      user {
        name
        details {
          photoURL
        }
        id
      }
    }
    wallOfFame {
      name
      id
    }
      picGallery {
      caption
      uri
    }
  }
}
    `

    const {loading,error, data}=useQuery(getClub,{

        variables:{        clubId:"61db4bd238a1d9792db903cd"}
    })
    if(error)return <div className="team-dashBoard flex flex-col bg-slate-200">Internal server error</div>
    if(loading) return <div className="team-dashBoard flex flex-col bg-slate-200">Loading</div>
    const {club}=data;

    return (
        <div className="club_DashBoard bg-slate-300 flex flex-col h-full">
            <ClubDashCon name={club.name} details={club.details} people={club.people} wallOfFame={club.wallOfFame} picGallery={club.picGallery}/>
        </div>
    );
}

export default ClubDashBoard;