import {FaLock, FaUser} from "react-icons/fa";
import './Style_css/loginl.css';
import Form from "./form";
function LoginD()
{
    return(
        <div className="warpper">
        <form action="#">
            <h1>Login</h1>
            <hr/>
            <div className="input-box">
                <input type="text" placeholder="Username" required></input><FaUser className="icon" />
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required></input><FaLock className="icon"/> 
            </div>
            <div className="for">
                <lable><input type="checkbox" />Remember me</lable>
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>

            <div className="reg">
                <p>Don't you have an account?</p>
                <hr/>
                <button onClick={<Form/>}>Create new account</button>
            </div>
        </form>
        </div>
    )
}
export default LoginD;

