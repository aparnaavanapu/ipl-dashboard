import './index.css'

const MatchCard=(props)=>{
    const {details}=props
    const {result,competing_team,competing_team_logo,match_status}=details
    const gameStatus=match_status==='Won'?'match-card-status-won':'match-card-status-lost';

    return(
        <div className="match-card-contents-container">
            <img src={competing_team_logo} alt={competing_team} className="match-card-logo"/>
            <p className="match-card-name">{competing_team}</p>
            <p className="match-card-result">{result}</p>
            <p className={gameStatus}>{match_status}</p>
        </div>
    )

}
export default MatchCard