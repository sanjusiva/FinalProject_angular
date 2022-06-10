const mongoose=require('mongoose');

var Material=mongoose.model('Material',{
    normal_Links : {type:String},
    payable_Links : {type:String},
    payable_Videos : {type:String},
    cost:{type:Number}
});

module.exports= {Material};