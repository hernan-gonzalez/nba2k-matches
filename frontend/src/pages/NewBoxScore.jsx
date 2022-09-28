import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { NBATeams } from "../utils/nbaTeams";

function NewBoxScore() {
    const { user } = useSelector((state) => state.auth);
    const { isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.boxScores
    );
    const [currentUser] = useState(user.name);
    const [email] = useState(user.email);
    const [currentUserGamerTag] = useState(user.psnUserName);
    const [currentUserTeam, setCurrentUserTeam] = useState("ATL");
    const [currentUserScore, setCurrentUserScore] = useState(0);

    const [opponentUserGamerTag, setOpponentUserGamerTag] = useState('');
    const [homecourt, setHomeCourt] = useState("away");
    const [oponentUserTeam, setOponentUserTeam] = useState("ATL");
    const [oponentUserScore, setOponentUserScore] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess) {
            dispatch(reset());
            navigate("/tickets");
        }
        dispatch(reset());
    }, [dispatch, isError, isSuccess, navigate, message]);

    const onSubmit = (e) => {
        e.preventDefault();

        // dispatch(createTicket({ product: currentUserTeam, description }));
    };

    const getFormData = () => {

        return {

        }
    }

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
                                <option value={team}>{team}</option>
                            ))}

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="currentUserScore">Score</label>
                        <input type="number" className="form-control" onChange={(e) => setCurrentUserScore(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="away" >Away</label>
                        <input type="radio" id="away" name="homecourt" value="away" />
                        <label htmlFor="home" >Home</label>
                        <input type="radio" id="home" name="homecourt" value="home" />
                    </div>
                    <hr />
                    <div className="form-group">Opponent</div>
                    <div className="form-group">
                        <label htmlFor="name">Your gametag</label>
                        <input
                            type="text"
                            className="form-control"
                            value={opponentUserGamerTag}
                            onChange={(e) => setOpponentUserGamerTag(e.target.value)}
                        />
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
                        <input type="number" className="form-control" onChange={(e) => setOponentUserScore(e.target.value)} />
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
