var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
mongoose.connect('mongodb+srv://shibila:shibila22@cluster0.lzqma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
var {moviemodel}=require('./models/moviemodel')
const { json } = require('body-parser')
var app=express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/read',(req,res)=>{
    var movieobject=new moviemodel(req.body)
    movieobject.save(
        
            (error)=>{
                if(error){
                    res.send(error)
                }
                else{
                    res.send({"status":"success"})
                }
            }
        
    )
    
})

app.get('/viewall',async(req,res)=>{
    try{
        var result=await moviemodel.find()
        res.json(result)
    }
    catch(error){
        res.send(error)
    }
})

app.post('/search',async(req,res)=>{
    try{
        var result=await moviemodel.find(req.body)
        res.json(result)
    }
    catch(error){
        res.json({"status":"error"})
    }
})

app.post('/edit',async(req,res)=>{
    try{
        var result=await moviemodel.findOneAndUpdate({"_id":req.body._id},req.body)
        res.json(result)
    }
    catch(error){
        res.json({"status":"error"})
    }
})

app.post('/delete',async(req,res)=>{
    try{
        var result=await moviemodel.findByIdAndDelete({"_id":req.body._id})
        res.json(result)
    }
    catch(error){
        res.json({"status":"error"})
    }
})



app.listen(3000,()=>{
    console.log("server started at ")
})