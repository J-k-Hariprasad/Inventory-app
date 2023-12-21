import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {FaLock, FaUser} from "react-icons/fa";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import './Style_css/loginl.css';
function LoginD()
{
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const username = document.getElementById('name').value;
        const password = document.getElementById('pass').value;
        console.log('Username:', username);
        console.log('Password:', password);

        if(username === "Hariprasad JK")
        {
            navigate('mainPage');
        }
        else
        {
            alert("Incorrect Username or Password")
        }
    };
    
    return(
        <center>

        <div className="warpper">
          <form onSubmit={handleSubmit}>
            <div className="reg">
                <h1>Login</h1>
                <hr/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Username" id='name' required></input><FaUser className="icon" />
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" id='pass' required></input><FaLock className="icon"/> 
            </div>
            <div className="for">
                <lable><Checkbox required/>Remember me</lable>
                <a onClick={()=>navigate('forgot-pass')}>Forgot Password?</a>
            </div>
            <Button  variant="contained" type='submit'>Login</Button>

            <div className="reg">
                <p>Don't you have an account?</p>
                <hr/>
                <Button variant="contained" onClick={()=>navigate('form-sign')}>Create new account</Button>
            </div>
        </form>
        </div>
        </center>
    )
}
export default LoginD;





