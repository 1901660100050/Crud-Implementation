const router = require('express').Router();
let User = require('../models/user.model')


// Implenting existing end points
// 1st method: Fetching the items
router.route('/').get((req,res)=>{
    User.find()
    .then(Users=>res.json(Users))
    .catch(err=>res.status(400).json('Error'+err));
});

// 2nd Method : to add the items
router.route('/add').post((req,res)=>{
    const task=req.body.task;
    const is_completd=req.body.is_completd;
    const end_date=req.body.end_date;
    const newUser=new User({task, is_completd,end_date})
    newUser.save()
    // User.find()
    .then(Users=>res.json("Task Added"))
    .catch(err=>res.status(400).json('Error'+err));
});

//3rd method : delete data
router.route('/:id').delete((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Task Deleted"))
    .catch(err=>res.status(400).json("Error "+err));
});

// 4th method Update data
router.route('/update/:id').post((req,res)=>{
    User.findbyId(req.params.id)
    .then(Users=>{
        User.task=req.body.task;
        User.is_completd=req.body.is_completd;
        User.end_date=req.body.end_date;
        User.save()

    .then(()=>res.json("task Updates Successfully"))
    .catch(err=>res.status(400).json("Error "+err));
})
.catch(err=>res.status(400).json("Error "+err));
});

module.exports=router;

