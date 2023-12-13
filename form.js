import comp from './Assests/comp.png'
import icon from './Assests/icon.png'
import go from './Assests/mail.png'
import mi from './Assests/mi.png'
import fb from './Assests/fb.png'
import li from './Assests/linked.png'
import './Style_css/App.css'
import './Style_css/loginl.css'
export default function Form()
{
    const inputStyle = {
        backgroundImage: `url(${comp})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        paddingLeft: '60px', };
    return(
<div>
    <div className='rig'>
        <img src={icon} height={50} width={120}></img>
        <h2 className='io'>Create Your Inventory Account</h2>
        <form >
            <input type="text" placeholder="UserName" style={inputStyle} /> <br/><br/>
            <input type="text" placeholder="Company Name" style={inputStyle} /> <br/><br/>
            <input type="email" placeholder="Email Address" style={inputStyle} /> <br/><br/>
            <input type="text" placeholder="Country" style={inputStyle} /> <br/><br/>
            <input type="text" placeholder="+91 Phone Number" style={inputStyle} /> <br/><br/>
            <input type="password" placeholder="Password" style={inputStyle} /> <br/><br/>
            <input type="password" placeholder="Conform Password" style={inputStyle} /> <br/><br/>
            <div  className='io'>
            <lable>
                <input type='checkbox'/>Accept the Terms and Condition</lable>

            </div>
            <button className='but'>CREATE YOUR ACCOUNT</button>
        </form>
        
            <h3 className='io'>Or login using </h3>
            <div className='iuuu'>
        <div>
            <button className='hell'>
            <img src={go} width={45} height={30}  alt="Google" style={{textAlign:'left'}}/>
            </button>
            <button className='hell'>
            <img src={mi} width={30} height={30} alt="Microsoft" style={{textAlign:'left'}} />     
            </button>
            <button className='hell'>
            <img src={fb} width={32} height={32} alt="Facebook" style={{textAlign:'right'}}/>
            </button>
            <button className='hell'>
            <img src={li} width={30} height={30} alt="LinkedIn" style={{textAlign:'right'}}/>
            </button>
        </div>
</div>

            
        
    </div>
</div>
    )
}


