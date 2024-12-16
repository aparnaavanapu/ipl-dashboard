import Loader from 'react-loader-spinner'
import {useState,useEffect} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

const Home=()=>{
    const [isLoading,setIsLoading]=useState(true)
    const [teamsList,setTeamsList]=useState([])
    
    useEffect(()=>{
    
    const getTeamsList= async ()=>{
        const response=await fetch("https://apis.ccbp.in/ipl");
        const data=await response.json()
        const updatedData=data.teams.map(eachItem=>({
            name:eachItem.name,
            id:eachItem.id,
            teamImageUrl:eachItem.team_image_url,

        }))
        setIsLoading(false)
        setTeamsList(updatedData)


    }
    getTeamsList()

    },[])

    return(
        <div className="home-bg-container">
            <div className="home-heading-container">
                <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="ipl-logo" className="ipl-logo" />
                <h1 className="home-heading">IPL Dashboard</h1>
            </div>
            {isLoading?<div className="loader-container">
               <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
               </div>:(
                <ul className="home-teams-container">
                    {teamsList.map(eachItem=><TeamCard details={eachItem} key={eachItem.id} />)}
                </ul>
               )}
        </div>
    )

}


export default Home