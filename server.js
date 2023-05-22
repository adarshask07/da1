const express= require('express')
const app = express()
app.use(express.static('public'))


app.get('/contact', (req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
}) ;


app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
})

app.listen(3000, (req,res)=>{
    
        console.log("server is running on port 3000 "+ __dirname)

    
})