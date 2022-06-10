const express=require('express')
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

var {Material}=require('../models/material');

//localhost:3000/materials/
//returns all the documents
router.get('/',(req,res)=>{
    Material.find((err,docs)=>{
        if(!err)
            res.send(docs);
        else
            console.log('Error in Retrieving Materials : '+JSON.stringify(err,undefined,2));
    });
});

//displays the specified document
router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : $(req.params.id)`);
    else
        Material.findById(req.params.id,(err,data)=>{
            if(!err)
                res.send(data);
            else
                console.log('Error in Retrieving Materials : '+JSON.stringify(err,undefined,2));
        });
});

router.post('/',(req,res)=>{
    var mat=new Material({
        normal_Links : req.body.normal_Links,
        payable_Links : req.body.payable_Links,
        payable_Videos : req.body.payable_Videos,
        cost: req.body.cost
    });
    mat.save((err,docs)=>{
        if(!err)
            res.send(docs);
        else
            console.log('Error in Retrieving Materials : '+JSON.stringify(err,undefined,2));
    });
});

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : $(req.params.id)`);
    var mat={
        normal_Links : req.body.normal_Links,
        payable_Links : req.body.payable_Links,
        payable_Videos : req.body.payable_Videos,
        cost: req.body.cost
    };
    Material.findByIdAndUpdate(req.params.id,{$set:mat},{new:true},(err,data)=>{
        if(!err)
            res.send(data);
        else
            console.log('Error in Material Update : '+JSON.stringify(err,undefined,2));
    });
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : $(req.params.id)`);

    Material.findByIdAndRemove(req.params.id,(err,data)=>{
        if(!err)
            res.send(data);
        else
            console.log('Error in Material Delete : '+JSON.stringify(err,undefined,2));
    });
});

module.exports=router;