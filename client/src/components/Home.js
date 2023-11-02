
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Home=()=>{
    const navi=useNavigate();
    return(
       <div>
        {/* <button onClick={navi('/login')}>Login</button> */}
        {/* <button onClick={navi('/sign')}>SignUp</button>
         */}
         <Link type="button" to="/login">login</Link>
         <br></br>
         <Link type="button" to="/sign">SignUp</Link>

       </div>
    )
}
export default Home;