import './index.css'
import {Link}  from 'react-router-dom'

const TeamCard=(props)=>{
    const {details}=props
    const {id,name,teamImageUrl}=details


    return(
        <Link to={`/team-matches/${id}`}  className="link-item">
            <li className="team-card-container">
            <img src={teamImageUrl} alt={`team${id}`}  className="team-card-img" />
            <p className="team-card-name">{name}</p>
            </li>
            
        </Link>
        
        
    )
}
export default TeamCard