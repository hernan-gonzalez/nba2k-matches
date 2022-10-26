import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { NBATeams } from "../utils/nbaTeams";
import { getUsers } from "../features/auth/authSlice";
import { createBoxScore } from "../features/boxScores/boxScoresSlice";

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

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createBoxScore(getFormData()));
    };

    const getFormData = () => {
        if (homecourt === "home") {
            return {
                home: {
                    user: user._id,
                    team: currentUserTeam,
                    score: currentUserScore,
                },
                away: {
                    user: oponentUserGamerTag,
                    team: oponentUserTeam,
                    score: oponentUserScore,
                },
            };
        }
        return {
            away: {
                user: user._id,
                team: currentUserTeam,
                score: currentUserScore,
            },
            home: {
                user: oponentUserGamerTag,
                team: oponentUserTeam,
                score: oponentUserScore,
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
                        disabled
                    />
                </div>

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="currentUserTeam">Team</label>
                        <select
                            name="currentUserTeam"
                            id="currentUserTeam"
                            value={currentUserTeam}
                            onChange={(e) => setCurrentUserTeam(e.target.value)}
                        >
                            {NBATeams.map((team) => (
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
                            onChange={(e) =>
                                setCurrentUserScore(e.target.value)
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="homecourt">Team</label>
                        <select
                            name="homecourt"
                            id="homecourt"
                            value={homecourt}
                            onChange={(e) => setHomeCourt(e.target.value)}
                        >
                            <option key={"away"} value="away">Away</option>
                            <option key={"home"} value="home">Home</option>
                        </select>
                    </div>
                    <hr />
                    <div className="form-group">Opponent</div>
                    <div className="form-group">
                        <label htmlFor="name">Opponent gametag</label>
                        <select
                            name="oponentUserGamerTag"
                            id="oponentUserGamerTag"
                            value={oponentUserGamerTag}
                            onChange={(e) =>
                                setOponentUserGamerTag(e.target.value)
                            }
                        >
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.psnUserName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="oponentUserTeam">Team</label>
                        <select
                            name="oponentUserTeam"
                            id="oponentUserTeam"
                            value={oponentUserTeam}
                            onChange={(e) => setOponentUserTeam(e.target.value)}
                        >
                            {NBATeams.map((team) => (
                                <option value={team}>{team}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="oponentUserScore">Score</label>
                        <input
                            type="number"
                            className="form-control"
                            onChange={(e) =>
                                setOponentUserScore(e.target.value)
                            }
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
