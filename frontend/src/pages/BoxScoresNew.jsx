import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import TicketItem from "../components/TicketItem";
import { getBoxScores, getBoxScoresWithPlayerRecord, getPlayerRecord, reset, } from "../features/boxScores/boxScoresSlice";
import BoxScoreItem from "../components/BoxScoreItem";
import { FaArchway } from "react-icons/fa";
import { current } from "@reduxjs/toolkit";
import BoxScoreItemNew from "../components/BoxScoreItemNew";

function BoxScoresNew() {
    const { boxScores, record, isLoading, isSuccess, isError } = useSelector(
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
        dispatch(getBoxScoresWithPlayerRecord());
    }, [dispatch]);



    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <BackButton url="/" />
            <h1>Recent Matches</h1>
            <div className="flex flex-col mx-auto justify-center align-center bg-gray-300 w-48 rounded">
                <div className="">All time record</div>       <div className="">{record.wins + '-' + (record.totalGames - record.wins)}</div>
            </div>
            {/* <h2>{currentUser.psnUserName}'s Record {boxScores.filter(filterByWinner).length + '-' + (boxScores.length - boxScores.filter(filterByWinner).length)}</h2> */}
            {boxScores.map((boxScore) => (
                <BoxScoreItemNew key={boxScore._id} boxScore={boxScore} />
            ))}
            {/* <div className="tickets">
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
                
            </div> */}
        </>
    );
}

export default BoxScoresNew;
