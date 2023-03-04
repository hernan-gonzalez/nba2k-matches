import { Link } from "react-router-dom"
import { FaTicketAlt, FaBasketballBall, FaBox } from 'react-icons/fa'

function Home() {
    return (
        <>
            <section className="heading">
                <h1>Did you play 2k today?</h1>
                <p>Please choose from an option below</p>
            </section>

            <div className="flex flex-row space-x-4 justify-center">
                <Link className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded" to='/new-boxscore' >
                    <FaBasketballBall className="my-auto" /> <div className="px-2">Add a new box score</div>
                </Link>
                <Link className="flex bg-gray-500 hover:bg-gray-700 text-white font-bold p-4 rounded" to='/boxScores'>
                    <FaBox className=" my-auto" />
                    <div className="px-2">View My Matches</div>
                </Link>
            </div>



        </>
    )
}

export default Home