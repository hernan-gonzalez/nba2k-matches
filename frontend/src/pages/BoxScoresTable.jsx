import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { getBoxScores, reset } from "../features/boxScores/boxScoresSlice";
import BoxScoreItem from "../components/BoxScoreItem";

function BoxScoresTable() {
    const { boxScores, isLoading, isSuccess, isError } = useSelector(
        (state) => state.boxScores
    );

    const currentUser = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset());
            }
        };
    }, [dispatch, isSuccess]);

    useEffect(() => {
        dispatch(getBoxScores());
    }, [dispatch]);

    if (isLoading) {
        return <Spinner />;
    }

    const getWinnerUser = (boxScore) => {
        const { away, home } = boxScore;

        if (away.score > home.score)
            return away.user;
        else
            return home.user;
    }

    const filterByWinner = (boxScore) => {
        const winner = getWinnerUser(boxScore);
        return winner._id === currentUser._id;
    }

    return (
        <>
            <BackButton url="/" />
            <h1>Box Scores</h1>
            <h2>{currentUser.name}'s Record {boxScores.filter(filterByWinner).length + '-' + (boxScores.length - boxScores.filter(filterByWinner).length)}</h2>
            <div className="tickets">
                <div className="ticket-headings-main">
                    <div>Home</div>
                    <div>Away</div>
                </div>
                <div className="ticket-headings">
                    <div>User</div>
                    <div>Team </div>
                    <div>Score </div>
                    <div></div>
                    <div>User</div>
                    <div>Team </div>
                    <div>Score </div>
                </div>
                {boxScores.map((boxScore) => (
                    <BoxScoreItem key={boxScore._id} boxScore={boxScore} />
                ))}
            </div>
        </>
    );
}

export default BoxScoresTable;
