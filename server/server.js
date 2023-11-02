const express=require('express');
const app=express();
const mClient=require('mongodb').MongoClient;
const cors=require('cors');
const expressAsyncHandler=require('express-async-handler');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const objectid=require('mongodb').ObjectId;


app.use(cors());

app.use(express.json());



const dburl=""

mClient.connect(dburl)
.then((client)=>{

    const thedb=client.db('thedb');

    const uColl=thedb.collection('uColl');

    app.set('uColl',uColl);


    console.log("database started successfully");
},(err)=>{
    console.log("error has occured"+ err.message)
})



app.get('/',(req,res)=>{
    res.send("this is server side")
})

// app.post('/sign',expressAsyncHandler((request,response)=>{
    app.post('/sign',expressAsyncHandler(async(request,response)=>{

        console.log(request.body);

            const {username,email,password}=request.body;

    const obj={
        user:username,
        email:email,
        password:password
    }

    const uColl=app.get('uColl');

    const hey=await uColl.findOne({user:username});
    console.log(hey);

    if(hey==null)
    {
        const x=await bcrypt.hash(password,10);
        const dob={...obj,password:x};
        await uColl.insertOne(dob);
        response.send({message:"success"});
    }else{
         response.send({message:"failed"});
    }
      

    }))

    app.post('/log',expressAsyncHandler(async(request,response)=>{

    const {email,password}=request.body;
    const uColl=app.get('uColl');

    const hey=await uColl.findOne({email:email});

    if(hey==null){
        response.send({message:'no user'});
    }else{

        const check=await bcrypt.compare(password,hey.password);
        // const query={_id:new objectid(hey._id)};
        

        if(check){
            const token=jwt.sign({id:hey._id},"prashanth",{expiresIn:'1h'});
            response.send({message:"success",payload:token});
        }else{
            response.send({message:"failed"})
        }
    }







       


    }))

    // console.log(request.body)
  


app.listen('4000',()=>{
    console.log('server started successfully');
})