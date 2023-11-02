import { useNavigate } from "react-router-dom";



const Dashboard=()=>{
    const navi=useNavigate();


    const hi=()=>{
        navi('/')
    }

    const logout=()=>{
        const dj=JSON.parse(localStorage.getItem('token'));
        console.log(dj);
        // localStorage.removeItem('token');
        hi();
    }
    return(
       <div>
       <h1>this Dashboard</h1>
       <button onClick={logout}>logout</button>
       </div>
    )
}
export default Dashboard;