const express =require('express');
const app =express();
const port = 5000;
app.get('/api/movies', (req, res) =>{
    const movies = require('./movies.json');
    res.json(movies);

});
app.listen(port,()=>{
    console.log('server running on ${port}')
})
export default app;