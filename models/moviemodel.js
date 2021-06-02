var mongoose=require('mongoose')
var movieschema=new mongoose.Schema({
    name:{
        type:String,
        
    },
    actor:{
        type:String
    },
    director:{
        type:String
    },
    genre:{
        type:String
    },
    year:{
        type:Number
    }
}
)

var moviemodel=mongoose.model('movies',movieschema)
module.exports={moviemodel}