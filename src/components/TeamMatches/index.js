import { useParams } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {useState,useEffect} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'


const TeamMatches=()=>{
    const {id}=useParams()
    const [isLoading,setIsLoading]=useState(true)
    const [teamData,setTeamData]=useState([])


    useEffect(()=>{
        const getTeamName=async()=>{
            const response=await fetch(` https://apis.ccbp.in/ipl/${id}`)
            const data=await response.json()
            console.log(data)
            const updatedData={
                teamBannerUrl:data.team_banner_url,
                latestMatchDetails:data.latest_match_details,
                recentMatches:data.recent_matches
            }

            setIsLoading(false)
            setTeamData(updatedData)
            


        }
        getTeamName()
    },[id])


    return(
        <div className={`team-matches-container ${id}`}>
            {isLoading?<div className="loader-container"><Loader type="TailSpin" color="#ffffff" height={50} width={50} /></div>:(
                <div>
                    <img src={teamData.teamBannerUrl} alt={`${id} banner`} className="team-banner-img"/>
                    <LatestMatch details={teamData.latestMatchDetails} key={teamData.latestMatchDetails.id}/>
                    <ul className="team-match-cards-container">
                        {teamData.recentMatches.map(eachItem=><MatchCard details={eachItem} key={eachItem.id}/>)}
                    </ul>
                </div>
            )}

        </div>
    )

}

export default TeamMatches