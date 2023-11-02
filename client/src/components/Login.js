import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const Login=()=>{
    const navi=useNavigate();
    const hi=()=>{
        navi('/')
    }

    const {register,handleSubmit,formState:{errors},reset}=useForm();
    const fun=async(data)=>{
        console.log(data);
        reset();

        const response= await fetch('http://localhost:4000/log',{
            method:'POST',
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify(data)
        })
        const p= await response.json();
        console.log(p);

        if(p.message=='success'){
            localStorage.setItem('token',p.payload);
            navi('/dash');
        }else if(p.message=='no user'){
            alert('no user exists');
        }else{
            alert('wrong password');
        }
    }
    return(
       <div>
        <button onClick={hi}>home</button>
        <h1>Login</h1>

        <form onSubmit={handleSubmit(fun)}>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" id="email"{...register("email",{required:true})}/> 
            </div>
            <div>
            <label htmlFor="password">password</label>
                <input type="text" id="password" {...register("password",{required:true})}/> 

            </div>
            <button type="submit">login</button>
        </form>
        

       </div>
    )
}
export default Login;