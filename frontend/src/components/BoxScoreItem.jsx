import { Link } from "react-router-dom";
import { NBAIcon } from "./NBAIcon";
function BoxScoreItem({ boxScore }) {
    console.log(boxScore);
    return (
        <div className="ticket">
            <div>{boxScore.player1.user.psnUserName}</div>
            <div><NBAIcon team={boxScore.player1.team} /></div>
            <div>{boxScore.player1.score}</div>
            <div>{boxScore.player2.user.psnUserName}</div>
            <div><NBAIcon team={boxScore.player2.team} /></div>
            <div>{boxScore.player2.score}</div>
        </div>
    );
}

export default BoxScoreItem;
