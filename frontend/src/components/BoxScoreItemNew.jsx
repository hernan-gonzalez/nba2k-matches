
import { NBAIcon } from "./NBAIcon";
function BoxScoreItemNew({ boxScore }) {
    return (
        <div className="relative flex  flex-col items-center justify-center my-2">
            <div className="h-84 flex w-64 flex-col items-center justify-center space-y-2 rounded-lg bg-gray-200 md:h-36 md:w-64 md:flex-row md:space-y-0">
                <div className="flex w-1/2 flex-row justify-center py-2">
                    <div className="flex flex-col items-center justify-center rounded-md p-2">
                        <NBAIcon team={boxScore.home.team} />
                        <div className="text-sm font-extrabold">{boxScore.home.score}</div>
                        <div className="text-xs font-thin">{boxScore.home.user.psnUserName}</div>
                    </div>
                </div>
                <div className="flex w-1/2 flex-row justify-center py-2">
                    <div className="flex flex-col items-center justify-center rounded-md p-2">
                        <NBAIcon team={boxScore.away.team} />
                        <div className="text-sm font-extrabold">{boxScore.away.score}</div>
                        <div className="text-xs font-thin">{boxScore.away.user.psnUserName}</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BoxScoreItemNew;
