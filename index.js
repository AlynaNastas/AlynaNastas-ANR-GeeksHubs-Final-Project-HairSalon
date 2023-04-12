const express = ('express');
const app = express();
const PORT = 3000;

app.use(express.json());




app.get('/welcome', (req, res) => {
    return res.send("Welcome to my app")
})



app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT} `)
})