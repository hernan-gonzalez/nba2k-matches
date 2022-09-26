import { Link } from "react-router-dom"
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function Home() {
    return (
        <>
            <section className="heading">
                <h1>Did you had a 2k match today?</h1>
                <p>Please choose from an option below</p>
            </section>

            <Link to='/new-boxscore' className="btn btn-reverse btn-block">
                <FaQuestionCircle /> Add a new box score
            </Link>

            <Link to='/boxScores' className="btn btn-block">
                <FaTicketAlt /> View My Matches
            </Link>
        </>
    )
}

export default Home