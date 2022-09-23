import { Link } from "react-router-dom";
function BoxScoreItem({ boxScore }) {
    console.log(boxScore)
    return (
        <div className="ticket">
            <div>{boxScore.player1.user}</div>
            <div>{boxScore.player1.team}</div>
            <div>{boxScore.player1.score}</div>
            <div>{boxScore.player2.user}</div>
            <div>{boxScore.player2.team}</div>
            <div>{boxScore.player2.score}</div>
        </div>
    );
}

export default BoxScoreItem;
