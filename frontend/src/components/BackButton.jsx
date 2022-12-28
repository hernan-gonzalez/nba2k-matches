import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BackButton({ url }) {
    return (
        <div className="flex relative">
            <button class="right-0 bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                <Link to={url}>Back</Link>
            </button>
        </div>


    );
}
