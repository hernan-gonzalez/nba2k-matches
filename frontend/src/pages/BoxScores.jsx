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
import { toast } from "react-toastify";
function BoxScores() {
    const { boxScores, record, isLoading, isSuccess, isError, message } = useSelector(
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

    if (isError) {
        toast.error(message)
    }

    return (
        <>
            <BackButton url="/" />
            <h1 className="flex relative justify-center">Recent Matches</h1>
            <div className="flex flex-col w-44 mx-auto justify-center content-center align-items-center bg-transparent text-gray-700 font-semibold px-2 border border-gray-500 rounded">
                <div className="">All time record</div>
                <div className="">{record.wins + '-' + (record.totalGames - record.wins)}</div>
            </div>
            {boxScores.map((boxScore) => (
                <BoxScoreItemNew key={boxScore._id} boxScore={boxScore} />
            ))}

        </>
    );
}

export default BoxScores;
