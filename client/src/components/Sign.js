import { json, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";



const Sign=()=>{
    const navi=useNavigate();
    const hi=()=>{
        navi('/');
    }
    const fun=async(data)=>{
        console.log(data);
        reset();
       const response= await fetch('http://localhost:4000/sign',{
            method:'POST',
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify(data)
        })
        const p= await response.json();
        console.log(p);

        if(p.message=='success'){
            navi('/login');
        }else{
            alert('user already exists');
        }

    }
    const {register,handleSubmit,formState:{errors},reset}=useForm();

   
    return(
       <div>
        <button onClick={hi}>home</button>



        <h1>SignUp</h1>
        <form onSubmit={handleSubmit(fun)}>
        <div>
                <label htmlFor="username">username</label>
                <input type="text" id="username" {...register("username",{required:true})}/> 
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" id="email" {...register("email",{required:true})}/> 
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
export default Sign;