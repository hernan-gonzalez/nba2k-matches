import { Link } from "react-router-dom"
import { FaTicketAlt, FaBasketballBall, FaBox } from 'react-icons/fa'

function Home() {
    return (
        <>
            <section className="heading">
                <h1>Did you had a 2k match today?</h1>
                <p>Please choose from an option below</p>
            </section>

            <div className="flex flex-row space-x-4 justify-center">
                <button class="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

                    <Link to='/new-boxscore' >
                        <FaBasketballBall /> Add a new box score
                    </Link>
                </button>
                <button class="flex bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    <Link to='/boxScores'>
                        <FaBox /> View My Matches
                    </Link>
                </button>

            </div>



        </>
    )
}

export default Home