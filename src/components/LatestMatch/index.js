import './index.css'


const LatestMatch=(props)=>{
    const {details}=props
    const {umpires,result,man_of_the_match,date,venue,competing_team,competing_team_logo,first_innings,second_innings}=details
    return(
        <div className="latest-match-details-container">
            <div>
                <p className="latest-match-team-name">{competing_team}</p>
                <p className="latest-match-team-date">{date}</p>
                <p className="latest-match-team-venue">{venue}</p>
                <p className="latest-match-team-result">{result}</p>
                
            </div>
            <div>
                <img src={competing_team_logo} alt={competing_team} className="latest-match-team-logo" />
            </div>
            <div className="latest-match-innings-container">
                <h3 className="latest-match-innings-heading">First Innings</h3>
                <p className="latest-match-innings-team">{first_innings}</p>
                <h3 className="latest-match-innings-heading">Second Innings</h3>
                <p className="latest-match-innings-team">{second_innings}</p>
                <h3 className="latest-match-innings-heading">Man Of The Match</h3>
                <p className="latest-match-innings-team">{man_of_the_match}</p>
                <h3 className="latest-match-innings-heading">Umpires</h3>
                <p className="latest-match-innings-team">{umpires}</p>
            </div>
        </div>
    )
}

export default LatestMatch