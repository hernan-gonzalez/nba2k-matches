import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { NBATeams } from "../utils/nbaTeams";
import { getUsers } from "../features/auth/authSlice";
import { createBoxScore } from "../features/boxScores/boxScoresSlice";

import { useForm } from "react-hook-form";

function NewBoxScore() {
    const { user, users } = useSelector((state) => state.auth);
    const { isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.boxScores
    );
    const [currentUser] = useState(user.name);
    const [email] = useState(user.email);
    const [currentUserGamerTag] = useState(user.psnUserName);
    const [currentUserTeam, setCurrentUserTeam] = useState("ATL");
    const [currentUserScore, setCurrentUserScore] = useState(0);

    const [oponentUserGamerTag, setOponentUserGamerTag] = useState(
        users[0]?._id
    );
    const [homecourt, setHomeCourt] = useState("away");
    const [oponentUserTeam, setOponentUserTeam] = useState("ATL");
    const [oponentUserScore, setOponentUserScore] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    useEffect(() => {
        dispatch(getUsers());
        setOponentUserGamerTag(users[0]?._id);
    }, []);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess) {
            dispatch(reset());
            navigate("/boxScores");
        }
        dispatch(reset());
    }, [dispatch, isError, isSuccess, navigate, message]);

    const onSubmit = (data) => {

        dispatch(createBoxScore(getFormData(data)));
    };

    const getFormData = (data) => {
        if (homecourt === "home") {
            return {
                home: {
                    user: user._id,
                    team: data.currentUserTeam,
                    score: parseInt(data.currentUserScore),
                    outcome: parseInt(data.currentUserScore) > parseInt(data.oponentUserScore) ? "W" : "L"
                },
                away: {
                    user: data.oponentUserGamerTag,
                    team: data.oponentUserTeam,
                    score: parseInt(data.oponentUserScore),
                    outcome: parseInt(data.oponentUserScore) > parseInt(data.currentUserScore) ? "W" : "L"
                },
            };
        }
        return {
            away: {
                user: user._id,
                team: data.currentUserTeam,
                score: parseInt(data.currentUserScore),
                outcome: parseInt(data.currentUserScore) > parseInt(data.oponentUserScore) ? "W" : "L"
            },
            home: {
                user: data.oponentUserGamerTag,
                team: data.oponentUserTeam,
                score: parseInt(data.oponentUserScore),
                outcome: parseInt(data.oponentUserScore) > parseInt(data.currentUserScore) ? "W" : "L"
            },
        };
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <BackButton url="/" />
            <section className="heading">
                <h1>Add a new match</h1>
                <p>Please fill out the form below</p>
            </section>

            <section className="form">
                <div className="form-group">
                    <label htmlFor="name">Your gametag</label>
                    <input
                        type="text"
                        className="form-control"
                        value={currentUserGamerTag}
                        readOnly
                    />
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="currentUserTeam">Team</label>
                        <select
                            {...register("currentUserTeam")}

                        >
                            {NBATeams.map((team, index) => (
                                <option key={team} value={team}>
                                    {team}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="currentUserScore">Score</label>
                        <input
                            type="number"
                            className="form-control"
                            {...register("currentUserScore", { required: true, min: 1 })}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="homecourt">Team</label>
                        <select
                            {...register("homecourt",)}

                        >
                            <option key={"away"} value="away">Away</option>
                            <option key={"home"} value="home">Home</option>
                        </select>
                    </div>
                    <hr />
                    <div className="form-group">Opponent</div>
                    <div className="form-group">
                        <label htmlFor="Opponent gametag">Opponent gametag</label>
                        <select
                            {...register("oponentUserGamerTag", { required: true })}
                            name="oponentUserGamerTag"
                            id="oponentUserGamerTag"

                        >
                            {
                                users.map((user) => (
                                    <option key={user.id} value={user._id}>
                                        {user.psnUserName}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="oponentUserTeam">Team</label>
                        <select

                            {...register("oponentUserTeam", { required: true })}
                            name="oponentUserTeam"
                        >
                            {NBATeams.map((team, index) => (
                                <option key={team} value={team}>{team}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="oponentUserScore">Score</label>
                        <input
                            type="number"
                            {...register("oponentUserScore", { required: true, min: 1 })}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default NewBoxScore;
