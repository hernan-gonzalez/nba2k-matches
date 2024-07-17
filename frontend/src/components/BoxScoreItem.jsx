import { NBAIcon } from "./NBAIcon";
function BoxScoreItem({ boxScore }) {
    return (
        <div className="relative flex flex-col items-center justify-center my-2">
            <div className="flex font-thin text-xs">
                {boxScore.createdAt.split("T")[0]}
            </div>
            <div className="h-36 w-72 flex items-center justify-center space-x-4 rounded-lg bg-gray-100 md:h-36 md:w-96">
                <div className="flex w-1/2 flex-row justify-center py-2">
                    <div className="flex flex-col items-center justify-center rounded-md p-2">
                        <div className="text-sm">Home</div>
                        <NBAIcon team={boxScore.home.team} />
                        <div
                            className={`text-sm ${boxScore.home.score > boxScore.away.score
                                ? "font-extrabold"
                                : ""
                                }`}
                        >
                            {boxScore.home.score}
                        </div>
                        <div className="text-xs font-thin">
                            {boxScore.home.user.psnUserName}
                        </div>
                    </div>
                </div>
                <div className="flex w-1/2 flex-row justify-center py-2">
                    <div className="flex flex-col items-center justify-center rounded-md p-2">
                        <div className="text-sm">Away</div>
                        <NBAIcon team={boxScore.away.team} />
                        <div
                            className={`text-sm ${boxScore.away.score > boxScore.home.score
                                ? "font-extrabold"
                                : ""
                                }`}
                        >
                            {boxScore.away.score}
                        </div>
                        <div className="text-xs font-thin">
                            {boxScore.away.user.psnUserName}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxScoreItem;
