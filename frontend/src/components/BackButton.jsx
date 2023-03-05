import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BackButton({ url }) {
    return (
        <div className="flex relative">
            <Link to={url}>
                <button className="flex justify-center content-center align-items-center bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white px-2 py-2 border border-gray-500 hover:border-transparent rounded">
                    Back
                </button>
            </Link>
        </div>
    );
}
