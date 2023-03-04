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

import { useForm, Controller } from "react-hook-form";
import { NBAIcon } from "../components/NBAIcon";
import Select from "react-select";
function NewBoxScore() {
    const { user, users } = useSelector((state) => state.auth);
    const { isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.boxScores
    );
    const [currentUser] = useState(user.name);
    const [email] = useState(user.email);
    const [currentUserGamerTag] = useState(user.psnUserName);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        getValues,
    } = useForm();

    useEffect(() => {
        dispatch(getUsers());
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
        console.log(getFormData(data))
        // dispatch(createBoxScore(getFormData(data)));
    };

    const getFormData = (data) => {
        if (data.homecourt.value === "home") {
            return {
                home: {
                    user: user._id,
                    team: data.currentUserTeam.value,
                    score: parseInt(data.currentUserScore),
                    outcome:
                        parseInt(data.currentUserScore) >
                            parseInt(data.oponentUserScore)
                            ? "W"
                            : "L",
                },
                away: {
                    user: data.oponentUserGamerTag.value,
                    team: data.oponentUserTeam.value,
                    score: parseInt(data.oponentUserScore),
                    outcome:
                        parseInt(data.oponentUserScore) >
                            parseInt(data.currentUserScore)
                            ? "W"
                            : "L",
                },
            };
        }
        return {
            away: {
                user: user._id,
                team: data.currentUserTeam.value,
                score: parseInt(data.currentUserScore),
                outcome:
                    parseInt(data.currentUserScore) >
                        parseInt(data.oponentUserScore)
                        ? "W"
                        : "L",
            },
            home: {
                user: data.oponentUserGamerTag.value,
                team: data.oponentUserTeam.value,
                score: parseInt(data.oponentUserScore),
                outcome:
                    parseInt(data.oponentUserScore) >
                        parseInt(data.currentUserScore)
                        ? "W"
                        : "L",
            },
        };
    };

    if (isLoading) {
        return <Spinner />;
    }

    const formatOptionLabel = ({ value, label, logo }) => (
        <div style={{ display: "flex" }}>
            <div>{logo}</div>
            <div style={{ display: "flex", alignItems: "center" }}>{label}</div>
        </div>
    );

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
                        <Controller
                            name="currentUserTeam"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select
                                    placeholder="Choose team"
                                    {...field}
                                    formatOptionLabel={formatOptionLabel}
                                    options={NBATeams.map((team) => ({
                                        value: team,
                                        name: team,
                                        label: team,
                                        logo: <NBAIcon team={team} size={30} />,
                                    }))}
                                />
                            )}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="currentUserScore">Score</label>
                        <input
                            type="number"
                            className="form-control"
                            {...register("currentUserScore", {
                                required: true,
                                min: 1,
                            })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="homecourt">Court</label>
                        <Controller
                            name="homecourt"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select
                                    placeholder="Choose court"
                                    {...field}
                                    formatOptionLabel={formatOptionLabel}
                                    defaultValue={{ value: 'away', label: 'Away' }}
                                    options={[
                                        { value: 'away', label: 'Away' },
                                        { value: 'home', label: 'Home' }
                                    ]}
                                />
                            )}
                        />
                    </div>
                    <hr />
                    <div className="form-group">Opponent</div>
                    <div className="form-group">
                        <label htmlFor="Opponent gametag">
                            Opponent gametag
                        </label>
                        <Controller
                            name="oponentUserGamerTag"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select
                                    placeholder="Choose opponent"
                                    {...field}
                                    formatOptionLabel={formatOptionLabel}
                                    options={users.map((user) => ({
                                        value: user._id,
                                        name: user.psnUserName,
                                        label: user.psnUserName,
                                    }))}
                                />
                            )} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="oponentUserTeam">Team</label>
                        <Controller
                            name="oponentUserTeam"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select
                                    placeholder="Choose team"
                                    {...field}
                                    formatOptionLabel={formatOptionLabel}
                                    options={NBATeams.map((team) => ({
                                        value: team,
                                        name: team,
                                        label: team,
                                        logo: <NBAIcon team={team} size={30} />,
                                    }))}
                                />
                            )}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="oponentUserScore">Score</label>
                        <input
                            type="number"
                            {...register("oponentUserScore", {
                                required: true,
                                min: 1,
                                validate: {
                                    differentScore: value => parseInt(value) !== parseInt(getValues().currentUserScore),
                                }
                            })}
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
