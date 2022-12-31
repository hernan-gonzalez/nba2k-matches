import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };
    return (
        <header className="header">
            <div className="flex space-x-2">
                <Link to="/">NBA 2k23 Game Log</Link>
                <div>{user?.psnUserName}</div>
            </div>
            <ul>
                {user ? (
                    <li>
                        <div className="flex justify-center content-center align-items-center bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" onClick={onLogout}>
                            <FaSignOutAlt className="my-auto mx-2" />
                            <div className="div">Logout</div>
                        </div>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link className="flex group justify-center content-center align-items-center bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" to="/login">
                                <FaSignInAlt className="group-hover:text-white" />
                                <div className="group-hover:text-white">Login</div>
                            </Link>

                        </li>
                        <li>
                            <Link className="flex group justify-center content-center align-items-center bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" to="/register">
                                <FaUser className="group-hover:text-white" />
                                <div className="group-hover:text-white">Register</div>
                            </Link>


                        </li>
                    </>
                )}
            </ul>
        </header>
    );
}

export default Header;
