import { Link } from "react-router-dom";
import { NBAIcon } from "./NBAIcon";
function BoxScoreItem({ boxScore }) {
    console.log(boxScore);
    return (
        <div className="ticket">
            <div>{boxScore.home.user.psnUserName}</div>
            <div><NBAIcon team={boxScore.home.team} /></div>
            <div>{boxScore.home.score}</div>
            <div>{boxScore.away.user.psnUserName}</div>
            <div><NBAIcon team={boxScore.away.team} /></div>
            <div>{boxScore.away.score}</div>
        </div>
    );
}

export default BoxScoreItem;
