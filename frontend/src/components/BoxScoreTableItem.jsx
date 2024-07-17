import { NBAIcon } from "./NBAIcon";
function BoxScoreTableItem({ boxScore }) {
    return (
        <>
            <div>{boxScore.createdAt.split('T')[0]}</div>
            <div className="ticket">
                <div>{boxScore.home.user.psnUserName}</div>
                <div>
                    <NBAIcon team={boxScore.home.team} />
                </div>
                <div>{boxScore.home.score}</div>
                <div id="divider"></div>
                <div>{boxScore.away.user.psnUserName}</div>
                <div>
                    <NBAIcon team={boxScore.away.team} />
                </div>
                <div>{boxScore.away.score}</div>
            </div>
        </>

    );
}

export default BoxScoreTableItem;
