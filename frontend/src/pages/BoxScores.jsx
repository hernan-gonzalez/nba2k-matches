import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import TicketItem from "../components/TicketItem";
import { getBoxScores, reset } from "../features/boxScores/boxScoresSlice";
import BoxScoreItem from "../components/BoxScoreItem";

function BoxScores() {
    const { boxScores, isLoading, isSuccess, isError } = useSelector(
        (state) => state.boxScores
    );
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

    return (
        <>
            <BackButton url="/" />
            <h1>Box Scores</h1>
            <div className="tickets">
                <div className="ticket-headings">
                    <div>User 1</div>
                    <div>Team </div>
                    <div>Score </div>
                    <div>User 2</div>
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

export default BoxScores;
