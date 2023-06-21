const express = require ('express');
const app= express();
const port = 5000;
 app .get ('/',(req,res)=>{
    res.send('Hello World!');
 });
 app .listen(port,()=>{
    console.log(`Server is running on ${port}`);
 });
 //Add a route with GET request.
 app.get('/about',(req,res)=>{
    res.send('Welcome');
 });
 //Add a route for POST request along with validation payload and error handler for request.
app.post('/submit',(req,res,)=>{
    const { name,email}=req.body;
    if(!name||!email){
        return res.status(400).json({error:'fields required'});

    }
    else{
        res.status(200).json({success:true});
    }
})